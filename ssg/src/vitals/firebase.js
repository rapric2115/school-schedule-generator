// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGYWZDItKEP0FouZ9AGj8ffU71_C_vCaA",
  authDomain: "testing-scheduling.firebaseapp.com",
  projectId: "testing-scheduling",
  storageBucket: "testing-scheduling.appspot.com",
  messagingSenderId: "735564818957",
  appId: "1:735564818957:web:78cf0286cea69ee1a50344",
  measurementId: "G-XF5X4X45D8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);