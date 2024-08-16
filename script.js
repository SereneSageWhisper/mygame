// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnf_8pynMah25Y7Z7d2Ro1t23nsB9miYk",
  authDomain: "serenesagewhisper.firebaseapp.com",
  projectId: "serenesagewhisper",
  storageBucket: "serenesagewhisper.appspot.com",
  messagingSenderId: "645787711329",
  appId: "1:645787711329:web:be92bf25302f5856723720",
  measurementId: "G-B3Z427PTGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();

