import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB8ABJHdD8BhbY1W2AeCDfHEDgS7dTrcow",
    authDomain: "miniblog-87f50.firebaseapp.com",
    projectId: "miniblog-87f50",
    storageBucket: "miniblog-87f50.appspot.com",
    messagingSenderId: "217369275623",
    appId: "1:217369275623:web:279b341546ba66cf180642",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };