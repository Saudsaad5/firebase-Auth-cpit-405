 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getAuth } from "firebase/auth";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyC6zKuSmsSdwwDb7zPUAEVYCmuApJWaxe8",
   authDomain: "cpit-405-sp-ca-auth.firebaseapp.com",
   projectId: "cpit-405-sp-ca-auth",
   storageBucket: "cpit-405-sp-ca-auth.firebasestorage.app",
   messagingSenderId: "920244464656",
   appId: "1:920244464656:web:6e1e816eebaabdd76e6e95"
 };
 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);
export default app;