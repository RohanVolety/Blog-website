// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAOBOWp2YCDJb6zEzuE91Q8s3ZAg-VOvo",
  authDomain: "blog-website-12db2.firebaseapp.com",
  projectId: "blog-website-12db2",
  storageBucket: "blog-website-12db2.appspot.com",
  messagingSenderId: "276392912189",
  appId: "1:276392912189:web:e67045b2858449c9fd1154"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();