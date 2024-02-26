// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider, FacebookAuthProvider,  GithubAuthProvider  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw8BITv0tjCT9G9gB0FoMeqiGYAL2Rolw",
  authDomain: "reactbank-3f1c0.firebaseapp.com",
  projectId: "reactbank-3f1c0",
  storageBucket: "reactbank-3f1c0.appspot.com",
  messagingSenderId: "974633220207",
  appId: "1:974633220207:web:71fead66d222188559359a",
  measurementId: "G-RMC8GZ6MBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();
export {auth, analytics,firestore,provider,facebookProvider,githubProvider};
