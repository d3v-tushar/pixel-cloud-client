// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6yHE3RsajbEvHFhkiIbXG6CkV53-Z6fs",
  authDomain: "pixel-cloud-photography.firebaseapp.com",
  projectId: "pixel-cloud-photography",
  storageBucket: "pixel-cloud-photography.appspot.com",
  messagingSenderId: "816843911052",
  appId: "1:816843911052:web:70164ca1da3e4a4260f0a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;