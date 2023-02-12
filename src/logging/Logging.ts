/**
 * Copyright ©2022 Dana Basken
 */

import log4js from "log4js";
import {Config} from "../config/Config";

export class Logging {

  static channel?: string;

  static initializeLogging(channel?: string) {
    if (channel) { Logging.channel = channel; }

    const level = Config.get("logger.root.level", "trace");

    const appenders: any = {
      stdout: {
        type: "stdout",
        layout: {
          type: "pattern",
          pattern: Config.get("logger.stdout.format", "%d [%p] [%c-%z] %m")
        }
      }
    };

    if (Config.get("logger.file")) {
      appenders.file = {
        type: "file",
        filename: Config.get("logger.file.filename", "webapp-server.log")
      };
    }

    const appenderNames = Object.keys(appenders);
    const levels: any = Config.get("logger.levels", {});
    const categories: any = Object.keys(levels).reduce((categories: any, category: any) => {
      return {...categories, [category]: {appenders: appenderNames, level: levels[category]}};
    }, {default: {appenders: appenderNames, level: level}});

    log4js.configure({appenders: appenders, categories: categories});
  }

}
