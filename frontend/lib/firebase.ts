import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBPbRZqPDUeso0iGhevjeNp5nubaasIjc",
  authDomain: "cafeconnect-e3776.firebaseapp.com",
  projectId: "cafeconnect-e3776",
  storageBucket: "cafeconnect-e3776.firebasestorage.app",
  messagingSenderId: "16729344241",
  appId: "1:16729344241:web:1c47bad741a26abf8a0150",
  measurementId: "G-6WZYWJM6X6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);