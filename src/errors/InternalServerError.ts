/**
 * Copyright ©2024 Dana Basken
 */

import {constants} from "http2";

export default class InternalServerError extends Error {

  code: number = constants.HTTP_STATUS_INTERNAL_SERVER_ERROR;

  constructor(message?: any) {
    super(message ? message : "Internal Server Error");
  }

}
