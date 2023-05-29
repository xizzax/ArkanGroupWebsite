import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhNwzC3WwRqEHrsg9Z7tt9Y70cadZFX48",
  authDomain: "arkan-e04ff.firebaseapp.com",
  projectId: "arkan-e04ff",
  storageBucket: "arkan-e04ff.appspot.com",
  messagingSenderId: "241608678488",
  appId: "1:241608678488:web:51b0168c8c6ceb267cfe2d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
