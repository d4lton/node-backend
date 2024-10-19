/**
 * Copyright ©2022 Dana Basken
 */

import fs from "fs";
import log4js from "log4js";
import {ObjectUtilities} from "@d4lton/node-common";

const logger = log4js.getLogger("Config");

export class Config {

  static entries: any = {};

  static reset(): void {
    Config.entries = {};
  }

  static load(entries: any): void {
    Config._includeFiles(entries);
    Config.entries = Object.assign({}, Config.entries, entries);
  }

  /**
   * Load config values from a JSON file.
   */
  static loadFile(file: string) {
    Config.load(JSON.parse(fs.readFileSync(file).toString()));
  }

  /**
   * Set a key's value.
   */
  static set(key: string, value: any): void {
    ObjectUtilities.setDottedKeyValue(key, value, Config.entries);
  }

  /**
   * Get a key's value.
   */
  static get(key: string, defaultValue?: any): any {
    return ObjectUtilities.getDottedKeyValue(key, Config.entries, defaultValue);
  }

  private static _includeFiles(entries: any): void {
    for (const key in entries) {
      let value: any = entries[key];
      if (value == null) { continue; }
      if (typeof value === "object") {
        Config._includeFiles(value);
        continue;
      }
      if (typeof value !== "string") { continue; }
      const match = value.match(/^@(.+?):(.+)$/);
      if (match) {
        value = fs.readFileSync(match[2]).toString().trim();
        if (match[1] === "JSON") { value = JSON.parse(value); }
        entries[key] = value;
      }
    }
  }

}
