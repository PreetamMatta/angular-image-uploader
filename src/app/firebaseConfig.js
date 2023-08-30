// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFtc4I2NICnNEb0xcptHrmjQVcI_6Pixs",
  authDomain: "angular-image-upload-b0f25.firebaseapp.com",
  projectId: "angular-image-upload-b0f25",
  storageBucket: "angular-image-upload-b0f25.appspot.com",
  messagingSenderId: "416484742297",
  appId: "1:416484742297:web:a535f6fb3312b42cc99408",
  measurementId: "G-PKPNJFYWC2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
