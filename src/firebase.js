import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyADk39Ebqtm102-4bsPpjhV2ZW-T9Xx-Mc",
  authDomain: "auth-rendu-quizmania.firebaseapp.com",
  projectId: "auth-rendu-quizmania",
  storageBucket: "auth-rendu-quizmania.appspot.com",
  messagingSenderId: "1091874077728",
  appId: "1:1091874077728:web:8fbac3daba0f3a448e9045"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

