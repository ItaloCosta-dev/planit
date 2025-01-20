import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDC1-w9rsurjSL0U-j8pyk3OOZSWJDeWOg",
  authDomain: "planit-auth-b4596.firebaseapp.com",
  projectId: "planit-auth-b4596",
  storageBucket: "planit-auth-b4596.firebasestorage.app",
  messagingSenderId: "219854406979",
  appId: "1:219854406979:web:fecd0d6017eb9a3d6e9bf6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

