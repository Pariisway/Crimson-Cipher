import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC7G9FFEZVFRx8Ml_H49tJTcMUbmOZYmQ4",
  authDomain: "iaiwaf.firebaseapp.com",
  projectId: "iaiwaf",
  storageBucket: "iaiwaf.appspot.com",
  messagingSenderId: "548868801867",
  appId: "1:548868801867:web:a51be7e24ea9f1014d94ce"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
