// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv_yViHaipLBbbpMeda29o3RtyByEJDmk",
  authDomain: "reactcoder22.firebaseapp.com",
  projectId: "reactcoder22",
  storageBucket: "reactcoder22.appspot.com",
  messagingSenderId: "725658959403",
  appId: "1:725658959403:web:bacbae1c3f1a8ec2cc346e",
  measurementId: "G-070NVG3Q6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);