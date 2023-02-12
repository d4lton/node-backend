/**
 * Copyright ©2022 Dana Basken
 */

import {ObjectUtilities} from "@d4lton/node-common";
import fs from "fs";
import log4js from "log4js";
import {Logging} from "../logging/Logging";

const logger = log4js.getLogger("Config");

export class Config {

  static entries: any = {};

  static reset(): void {
    Config.entries = {};
  }

  static load(entries: any): void {
    Config.entries = Object.assign({}, Config.entries, entries);
  }

  /**
   * Load config values from a JSON file.
   * @param file {String}
   */
  static loadFile(file: string) {
    try {
      const text = fs.readFileSync(file);
      const config = JSON.parse(text.toString());
      Config.entries = Object.assign({}, Config.entries, config);
    } catch (error: any) {
      console.error(error.message);
    }
  }

  static start(): void {
  }

  static updateConfigFromRedis(message: any): void {
    Config.set(message.key, message.value);
    if (message.key === "logger.root.level" || message.key.startsWith("logger.levels.")) { Logging.initializeLogging(); }
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

}
