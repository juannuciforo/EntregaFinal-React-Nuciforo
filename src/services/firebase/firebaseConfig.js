// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPDf7cbACncwrhFz8NgdWaHzQjSgp7gYQ",
  authDomain: "fire-e-commerce-25790.firebaseapp.com",
  projectId: "fire-e-commerce-25790",
  storageBucket: "fire-e-commerce-25790.appspot.com",
  messagingSenderId: "320582821403",
  appId: "1:320582821403:web:cd3e751439ed4837c77abe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)