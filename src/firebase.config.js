// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaTu9xASBI00_uWmSfzb6YspaZPpEZUww",
  authDomain: "online-news-portal-bd.firebaseapp.com",
  projectId: "online-news-portal-bd",
  storageBucket: "online-news-portal-bd.appspot.com",
  messagingSenderId: "205833932414",
  appId: "1:205833932414:web:39af7709df94803326922f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;