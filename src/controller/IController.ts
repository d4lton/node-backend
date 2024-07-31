/**
 * Copyright ©2022 Dana Basken
 */

import {Express} from "express";

export interface IController {

  start(app?: Express): Promise<void>;

}
