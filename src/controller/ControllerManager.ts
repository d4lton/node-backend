/**
 * Copyright ©2022 Drivepoint
 */

import "reflect-metadata";
import {glob} from "glob";
import log4js from "log4js";
import {AsyncLocalStorage} from "node:async_hooks";
import {English} from "@d4lton/node-common";
import InternalServerError from "../errors/InternalServerError";

const logger = log4js.getLogger("ControllerManager");

export type ControllerManagerStorageType = {
  request: any;
};

export class ControllerManager {

  public static storage: AsyncLocalStorage<ControllerManagerStorageType> = new AsyncLocalStorage();

  public static get request(): any {
    const request = ControllerManager.storage.getStore()?.request;
    if (!request) { throw new InternalServerError("request must be defined"); }
    return request;
  }

  static async getControllerFiles(): Promise<string[]> {
    const expression = "src/**/+([a-zA-Z])Controller.@(ts|js)";
    const pattern = `${process.cwd()}/${expression}`;
    return glob(`${pattern}`);
  }

  static async importController(file: string): Promise<any> {
    return new Promise((resolve) => {
      import(file).then(async (module: any) => {
        resolve(module);
      });
    });
  }

  static async start(app: any) {
    const startMs = Date.now();
    const names: string[] = [];
    const files = await ControllerManager.getControllerFiles();
    for (const file of files) {
      try {
        const module: any = await ControllerManager.importController(file);
        if (module.default) {
          const controller = new module.default();
          await controller.start(app);
          if (!Reflect.getMetadata("__Controller__", module.default)) { continue; }
          const prefix = Reflect.getMetadata("prefix", module.default);
          const routes: Array<any> = Reflect.getMetadata("routes", module.default);
          for (const route of routes) {
            app[route.method.toLowerCase()](`${prefix}${route.path}`, route.middlewares, (request: any, response: any) => {
              ControllerManager.storage.run({request}, () => controller[route.handler](request, response));
            });
          }
          names.push(module.default.name);
        }
      } catch (error: any) {
        logger.error(`could not create Controller for ${file}: ${error.message}`);
      }
    }
    logger.debug(`started ${names.length} Controller${English.plural(names.length)} in ${Date.now() - startMs}ms`);
  }

  static addRESTErrorHandler(target: any, descriptor: PropertyDescriptor): void {
    const logger = log4js.getLogger(target.constructor.name);
    const method: Function = descriptor.value;
    descriptor.value = async function(...args: any[]) {
      const request = args[0];
      const response = args[1];
      try {
        return await method.apply(this, args);
      } catch (error: any) {
        const ip = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        let body = JSON.stringify(request.body);
        if (body.length > 512) {
          body = `${body.substring(0, 256)} … ${body.substring(body.length - 256)}`;
        }
        const where = error.stack?.split("\n")[1]?.split(/[/)]/).filter((it: any) => it).slice(-1).join();
        const code = typeof error.code === "number" ? error.code >= 200 ? error.code : 500 : 500;
        logger.error(ip, code, error.message, JSON.stringify({where, method: request.method, url: request.url, params: request.params, query: request.query, body: body}));
        response.status(code).send({errors: [{error: error.message, original: JSON.stringify(error)}]});
      }
    };
  }

}
