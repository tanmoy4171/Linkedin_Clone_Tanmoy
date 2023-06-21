// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn8qwZPfmtNB-dJAEM_QtwpQFLIGTj5KY",
  authDomain: "linkedin-clone-tanmoy.firebaseapp.com",
  projectId: "linkedin-clone-tanmoy",
  storageBucket: "linkedin-clone-tanmoy.appspot.com",
  messagingSenderId: "471268953215",
  appId: "1:471268953215:web:2d6b2118c8e4f75c88034a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };