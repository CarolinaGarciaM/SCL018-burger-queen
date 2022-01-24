// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXPxH-6HlQgIGY3ywwXcuasla0fcYCCo8",
  authDomain: "milhaveg-scl018-burger-q-d26d9.firebaseapp.com",
  projectId: "milhaveg-scl018-burger-q-d26d9",
  storageBucket: "milhaveg-scl018-burger-q-d26d9.appspot.com",
  messagingSenderId: "77219170477",
  appId: "1:77219170477:web:ae7f26dc996c0ec3be1e24",
  measurementId: "G-2YCV3JFV95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);