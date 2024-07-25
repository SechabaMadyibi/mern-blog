// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-57e7c.firebaseapp.com",
  projectId: "mern-blog-57e7c",
  storageBucket: "mern-blog-57e7c.appspot.com",
  messagingSenderId: "879047886894",
  appId: "1:879047886894:web:3a5b038e3beadbc35af7bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);