// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWiN8Y7wXK_TzvkxXBR09I5bstsuqF3SY",
  authDomain: "food-delivery-48b2d.firebaseapp.com",
  projectId: "food-delivery-48b2d",
  storageBucket: "food-delivery-48b2d.appspot.com",
  messagingSenderId: "767466318255",
  appId: "1:767466318255:web:05f1018f46aed20fc4675a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;