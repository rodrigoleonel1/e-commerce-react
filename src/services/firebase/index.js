import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCIckPa6YXf7mQmZz76ig-IxDBxL086DvU",
  authDomain: "backend-sneakers.firebaseapp.com",
  projectId: "backend-sneakers",
  storageBucket: "backend-sneakers.appspot.com",
  messagingSenderId: "952070177673",
  appId: "1:952070177673:web:f196a783cca279fd681758"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)