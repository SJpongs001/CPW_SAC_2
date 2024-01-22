import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArgNJKB2G43F91HbRlCDnGU1vi-w6sKU0",
  authDomain: "cpw-chat.firebaseapp.com",
  projectId: "cpw-chat",
  storageBucket: "cpw-chat.appspot.com",
  messagingSenderId: "92737603589",
  appId: "1:92737603589:web:01e4c4a7742317a5a5f46c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()