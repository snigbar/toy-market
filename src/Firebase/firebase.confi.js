// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA4PNsO2qncLlm0711lvfURuyID052dek",
  authDomain: "toy-store-b6b93.firebaseapp.com",
  projectId: "toy-store-b6b93",
  storageBucket: "toy-store-b6b93.appspot.com",
  messagingSenderId: "832646547855",
  appId: "1:832646547855:web:053bcfbdd88eade502a3fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;