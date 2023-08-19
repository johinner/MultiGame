//import "dotenv/config";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBAUvZqXI_Uen8caW6G7vTmyB7vIW3zhPk",
  authDomain: "multigames-abe7d.firebaseapp.com",
  projectId: "multigames-abe7d",
  storageBucket: "multigames-abe7d.appspot.com",
  messagingSenderId: "883742263367",
  appId: "1:883742263367:web:9a520787fccd3a5daec962"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

// funcionalidades de autenticacion
export const FirebaseAuth = getAuth(FirebaseApp);

// configuracion de la base datos
export const FirebaseDB = getFirestore(FirebaseApp);
