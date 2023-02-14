/**
 * Copyright ©2023 Dana Basken
 */

import "reflect-metadata";
import {ControllerManager, RESTMethodOptions} from "../ControllerManager";

export const Post = (path: string, options?: RESTMethodOptions): any => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor): void => {
    ControllerManager.addRouteMetadata(path, "POST", target, propertyKey, options?.middlewares);
    ControllerManager.addRESTErrorHandler(target, descriptor);
  };
};
