/**
 * Copyright ©2024 Dana Basken
 */

import * as admin from "firebase-admin";
import {Firebase} from "./Firebase";

export class Firestore {

  static async add(collectionPath: string, data: any): Promise<admin.firestore.DocumentReference> {
    return Firebase
      .firestore
      .collection(collectionPath)
      .add(data);
  }

  static async get(collectionPath: string, documentPath?: string): Promise<admin.firestore.DocumentSnapshot | admin.firestore.QuerySnapshot> {
    if (documentPath) {
      return Firebase
        .firestore
        .collection(collectionPath)
        .doc(documentPath)
        .get();
    } else {
      return Firebase
        .firestore
        .collection(collectionPath)
        .get();
    }
  }

  static async update(collectionPath: string, documentPath: string, data: any): Promise<admin.firestore.WriteResult> {
    return Firebase
      .firestore
      .collection(collectionPath)
      .doc(documentPath)
      .update(data);
  }

  static async delete(collectionPath: string, documentPath: string): Promise<admin.firestore.WriteResult> {
    return Firebase
      .firestore
      .collection(collectionPath)
      .doc(documentPath)
      .delete();
  }

  static onSnapshot(collectionPath: string, documentPath: string, callback: (snapshot: admin.firestore.DocumentSnapshot) => void): void {
    Firebase
      .firestore
      .collection(collectionPath)
      .doc(documentPath)
      .onSnapshot(callback);
  }

  static onCollectionGroupSnapshot(collectionGroup: string, callback: (snapshot: admin.firestore.QuerySnapshot) => void): void {
    Firebase
      .app
      .firestore()
      .collectionGroup(collectionGroup)
      .onSnapshot(callback);
  }

}
