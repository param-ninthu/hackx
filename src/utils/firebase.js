// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAglpM-GvA8q8IXpSjGVlqdz_kuiDA7loc",
  authDomain: "exair-dashboard.firebaseapp.com",
  databaseURL: "https://exair-dashboard-default-rtdb.firebaseio.com",
  projectId: "exair-dashboard",
  storageBucket: "exair-dashboard.appspot.com",
  messagingSenderId: "705676464391",
  appId: "1:705676464391:web:7f774adb3a06f0879375a2",
  measurementId: "G-43658713JL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default getFirestore();