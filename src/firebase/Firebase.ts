/**
 * Copyright ©2023 Dana Basken
 */

import * as admin from "firebase-admin";
import {Config} from "../config/Config";

export class Firebase {

  private static _app?: admin.app.App;
  private static _auth?: admin.auth.Auth;
  private static _firestore: admin.firestore.Firestore;

  static get app() {
    if (!Firebase._app) {
      const config = Config.get("firestore");
      Firebase._app = admin.initializeApp(config ? {credential: admin.credential.cert(config)} : undefined);
      Firebase._auth = Firebase.app.auth();
      Firebase._firestore = Firebase.app.firestore();
    }
    return Firebase._app;
  }

  static get auth(): admin.auth.Auth {
    return Firebase._auth;
  }

  static get firestore(): admin.firestore.Firestore {
    return Firebase._firestore;
  }

}
