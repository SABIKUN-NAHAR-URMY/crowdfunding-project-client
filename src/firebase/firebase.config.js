// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCefpcgL5fJeKtBfRQ2dvWIqTCtAyEKnbU",
  authDomain: "code-kids-project.firebaseapp.com",
  projectId: "code-kids-project",
  storageBucket: "code-kids-project.appspot.com",
  messagingSenderId: "565380152058",
  appId: "1:565380152058:web:5042c0f65ecbdf05596743"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;