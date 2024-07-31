/**
 * Copyright ©2022 Dana Basken
 */

import "reflect-metadata";
import {ControllerManager} from "../ControllerManager";

export const Delete = (path: string, ...middlewares: any[]): any => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor): void => {
    if (!Reflect.hasMetadata("routes", target.constructor)) {
      Reflect.defineMetadata("routes", [], target.constructor);
    }
    const routes = Reflect.getMetadata("routes", target.constructor) as Array<any>;
    routes.push({method: "DELETE", path, handler: propertyKey, middlewares: middlewares});
    Reflect.defineMetadata("routes", routes, target.constructor);
    ControllerManager.addRESTErrorHandler(target, descriptor);
  };
};
