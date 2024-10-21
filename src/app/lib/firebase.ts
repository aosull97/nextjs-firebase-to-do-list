import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

//why does it not work when trying to use process.env variables?
const firebaseConfig = {
    apiKey: "AIzaSyDdBcWR_ta5y4xrkTZlatEsk4wvIMBs6Tc",
    authDomain: "nextjs-task-manager-a8ca9.firebaseapp.com",
    projectId: "nextjs-task-manager-a8ca9",
    storageBucket: "nextjs-task-manager-a8ca9.appspot.com",
    messagingSenderId: "100391853753",
    appId: "1:100391853753:web:560e322b0e131bfdd34568"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;