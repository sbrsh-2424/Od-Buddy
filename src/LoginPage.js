// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVmNfmyJpDLSJdl0CSVzsyOAREsrXDc0o",
  authDomain: "on-duty-43d81.firebaseapp.com",
  projectId: "on-duty-43d81",
  storageBucket: "on-duty-43d81.appspot.com",
  messagingSenderId: "985627973580",
  appId: "1:985627973580:web:19d68940bfbfaa9b5daf69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
