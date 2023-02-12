/**
 * Copyright ©2023 Dana Basken
 */

import * as admin from "firebase-admin";
import {Config} from "../config/Config";

export class Firebase {

  private static _app?: admin.app.App;
  private static _auth?: admin.auth.Auth;

  static get app() {
    if (!Firebase._app) {
      const config = Config.get("firestore");
      Firebase._app = admin.initializeApp({credential: admin.credential.cert(config)});
    }
    return Firebase._app;
  }

  static get auth(): admin.auth.Auth {
    if (!Firebase._auth) {
      Firebase._auth = Firebase.app.auth();
    }
    return Firebase._auth;
  }

}
