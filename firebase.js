// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCzDCzikTY-Rfv0c9JPUdiFR0xcDbkb248",
  authDomain: "twitter-clone-bef4b.firebaseapp.com",
  projectId: "twitter-clone-bef4b",
  storageBucket: "twitter-clone-bef4b.appspot.com",
  messagingSenderId: "966127330173",
  appId: "1:966127330173:web:c377d63d1b29b37c78a214",
  measurementId: "G-0JSJ8FD4Y6",
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
