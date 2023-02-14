/**
 * Copyright ©2023 Dana Basken
 */

import "reflect-metadata";
import {ControllerManager, RESTMethodOptions} from "../ControllerManager";

export const Patch = (path: string, options?: RESTMethodOptions): any => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor): void => {
    ControllerManager.addRouteMetadata(path, "PATCH", target, propertyKey, options?.middlewares);
    ControllerManager.addRESTErrorHandler(target, descriptor);
  };
};
