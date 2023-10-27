
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"


const firebaseConfig = {
  apiKey: "AIzaSyDacbVhAl-q9n8hxnH_tp-LLcc6SQmChgg",
  authDomain: "portfolio-6f035.firebaseapp.com",
  projectId: "portfolio-6f035",
  storageBucket: "portfolio-6f035.appspot.com",
  messagingSenderId: "312439461272",
  appId: "1:312439461272:web:a0b7a2b0593e57f5dd07ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getDatabase(app);