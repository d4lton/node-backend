/**
 * Copyright ©2023 Dana Basken
 */

import "reflect-metadata";

export const Description = (description: string): any => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor): void => {
    if (target.name) {
      Reflect.defineMetadata("resource-description", {description: description}, target);
    }
    if (propertyKey) {
      const descriptions = Reflect.getMetadata("endpoint-descriptions", target.constructor) as Array<any> || [];
      descriptions.push({handler: propertyKey, description: description});
      Reflect.defineMetadata("endpoint-descriptions", descriptions, target.constructor);
    }
  };
};
