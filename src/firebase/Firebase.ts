/**
 * Copyright ©2023 Dana Basken
 */

import * as admin from "firebase-admin";
import log4js from "log4js";
import {Config} from "../config/Config";

const logger = log4js.getLogger("Firebase");

export class Firebase {

  private static _app?: admin.app.App;
  private static _auth?: admin.auth.Auth;
  private static _firestore: admin.firestore.Firestore;

  static get app() {
    Firebase._ensureInitialized();
    return Firebase._app;
  }

  static get auth(): admin.auth.Auth {
    Firebase._ensureInitialized();
    return Firebase._auth;
  }

  static get firestore(): admin.firestore.Firestore {
    Firebase._ensureInitialized();
    return Firebase._firestore;
  }

  private static _ensureInitialized(): void {
    if (!Firebase._app) {
      logger.trace("initializing Firebase...");
      const config = Config.get("firebase") ?? Config.get("firestore");
      Firebase._app = admin.initializeApp(config ? {credential: admin.credential.cert(config)} : undefined);
      Firebase._auth = Firebase.app.auth();
      Firebase._firestore = Firebase.app.firestore();
      logger.trace("Firebase initialized.");
    }
  }

}
