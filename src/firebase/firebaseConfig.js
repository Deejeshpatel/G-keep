import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAzn25zdP-JwMcfztrh93GdXON3AS1hfUM",
  authDomain: "keep-cfdbd.firebaseapp.com",
  projectId: "keep-cfdbd",
  storageBucket: "keep-cfdbd.appspot.com",
  messagingSenderId: "954215725163",
  appId: "1:954215725163:web:c35ffceac97c360bc1d92e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export const auth = getAuth(app);
