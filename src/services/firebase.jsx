import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyD7hU97_8iWESpOTgO4qavJIxLaSKjG4fI",
  authDomain: "akari-store-c5b86.firebaseapp.com",
  projectId: "akari-store-c5b86",
  storageBucket: "akari-store-c5b86.firebasestorage.app",
  messagingSenderId: "580207201469",
  appId: "1:580207201469:web:bac0d88cec059dd9cfbbd4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
