// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChUZ83ZCgzMPapFc5nUUCYmOt7uIOUIhs",
  authDomain: "maltimart-eaba3.firebaseapp.com",
  projectId: "maltimart-eaba3",
  storageBucket: "maltimart-eaba3.appspot.com",
  messagingSenderId: "829422352358",
  appId: "1:829422352358:web:937fe333ad9e43f0b9c827"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db= getFirestore(app)
export const storage = getStorage(app)

export default app