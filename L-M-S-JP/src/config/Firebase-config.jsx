// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCYc-pauedsxjoFtz9xe0RzbRQXwdZeyKM",
  authDomain: "l-m-s-c7fd8.firebaseapp.com",
  projectId: "l-m-s-c7fd8",
  storageBucket: "l-m-s-c7fd8.appspot.com",
  messagingSenderId: "420360796185",
  appId: "1:420360796185:web:811e348588d550d5071288",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
