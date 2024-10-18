import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfzbuV1t8NTxnSGYYoSoxWTDYyYNFBzt0",
  authDomain: "np-aosullivan-sandbox.firebaseapp.com",
  projectId: "np-aosullivan-sandbox",
  storageBucket: "np-aosullivan-sandbox.appspot.com",
  messagingSenderId: "1046773539027",
  appId: "1:1046773539027:web:d185b86adcacb7fc21f426",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app, "task-manager");
export default db;