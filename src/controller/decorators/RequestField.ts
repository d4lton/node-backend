/**
 * Copyright ©2023 Dana Basken
 */

import "reflect-metadata";

export const RequestField = (field: any): any => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor): void => {
    const fields = Reflect.getMetadata("request-fields", target.constructor) as any[] || [];
    fields.push(Object.assign({}, {handler: propertyKey}, field));
    Reflect.defineMetadata("request-fields", fields, target.constructor);
  };
};
