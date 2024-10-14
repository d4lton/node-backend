/**
 * Copyright ©2022 Dana Basken
 */

import log4js from "log4js";
import {Config} from "../config/Config";

export class Logging {

  static channel?: string;

  static initializeLogging(channel?: string, appenders?: any) {
    if (channel) { Logging.channel = channel; }
    const level = Config.get("logger.root.level", "trace");
    // add default stdout appender if no appenders are specified:
    if (!appenders) {
      appenders = {
        stdout: {
          type: "stdout",
          layout: {
            type: "pattern",
            pattern: Config.get("logger.stdout.format", "%d [%p] [%c-%z] %m")
          }
        }
      };
    }
    // enableCallStack is required to show actual file info in pattern:
    const enableCallStack: boolean = Config.get("logger.enableCallStack", false);
    // build categories:
    const appenderNames = Object.keys(appenders);
    const levels: any = Config.get("logger.levels", {});
    const categories: any = Object.keys(levels).reduce((categories: any, category: any) => {
      return {...categories, [category]: {appenders: appenderNames, level: levels[category], enableCallStack}};
    }, {default: {appenders: appenderNames, level: level, enableCallStack}});
    // config log4js:
    try {
      log4js.configure({appenders: appenders, categories: categories});
    } catch (error: any) {
      console.error(error.message);
    }
  }

}
