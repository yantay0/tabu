// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTvRRR4dYlqOmlC6tF2MTTzYbqaFnBAoE",
  authDomain: "vue-midtearm.firebaseapp.com",
  projectId: "vue-midtearm",
  storageBucket: "vue-midtearm.appspot.com",
  messagingSenderId: "383213905923",
  appId: "1:383213905923:web:2622ec90d0bf3ac9b18636",
  measurementId: "G-ZDQFNHBGHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };