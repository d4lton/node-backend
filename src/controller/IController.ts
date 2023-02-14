/**
 * Copyright ©2023 Dana Basken
 */

export interface IController {

  start(): Promise<void>;
  stop(): Promise<void>;

}
