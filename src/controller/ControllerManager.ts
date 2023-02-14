/**
 * Copyright ©2023 Dana Basken
 */

import "reflect-metadata";
import glob from "glob";
import log4js from "log4js";

const logger = log4js.getLogger("ControllerManager");

export type RESTMethodOptions = {
  middlewares?: any[];
};

export class ControllerManager {

  static controllers: any[] = [];

  static async getControllerFiles(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      const expression = "src/**/+([a-zA-Z])Controller.@(ts|js)";
      const pattern = `${process.cwd()}/${expression}`;
      glob(`${pattern}`, (error: any, files: string[]) => {
        if (error) { return reject(error); }
        resolve(files);
      });
    });
  }

  static async importController(file: string): Promise<any> {
    return new Promise((resolve) => {
      import(file)
        .then(async (module: any) => resolve(module))
        .catch(error => logger.error(error));
    });
  }

  static async stop(): Promise<void> {
    for (const controller of ControllerManager.controllers) {
      controller.stop();
    }
  }

  static async start(app: any) {
    const files = await ControllerManager.getControllerFiles();
    for (const file of files) {
      try {
        const module: any = await ControllerManager.importController(file);
        if (module.default) {
          const controller = new module.default();
          ControllerManager.controllers.push(controller);
          await controller.start();
          const prefix = Reflect.getMetadata("prefix", module.default);
          const routes: Array<any> = Reflect.getMetadata("routes", module.default);
          for (const route of routes) {
            app[route.method.toLowerCase()](`${prefix}${route.path}`, route.middlewares, (request: any, response: any) => {
              controller[route.handler](request, response);
            });
          }
        }
      } catch (error: any) {
        logger.error(`could not create Controller for ${file}: ${error.message}`);
      }
    }
  }

  static addRouteMetadata(path: string, method: string, target: any, propertyKey: string, middlewares?: any[]): void {
    if (!Reflect.hasMetadata("routes", target.constructor)) {
      Reflect.defineMetadata("routes", [], target.constructor);
    }
    const routes = Reflect.getMetadata("routes", target.constructor) as Array<any>;
    routes.push({method: method, path, handler: propertyKey, middlewares: middlewares || []});
    Reflect.defineMetadata("routes", routes, target.constructor);
  }

  static addRESTErrorHandler(target: any, descriptor: PropertyDescriptor): void {
    const logger = log4js.getLogger(target.constructor.name);
    const method: Function = descriptor.value;
    descriptor.value = async function(...args: any[]) {
      const request = args[0];
      const response = args[1];
      try {
        return await method.apply(target, args);
      } catch (error: any) {
        const code = error.http_code || 500;
        if (code >= 300) {
          const ip = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
          logger.error(ip, error.message, JSON.stringify({method: request.method, url: request.url, params: request.params, query: request.query, body: request.body}));
        }
        response.status(code).send({error: error.message});
      }
    };
  }

}
