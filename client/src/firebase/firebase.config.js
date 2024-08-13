// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use 


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWyoTCNCv74kmilWWv90aAdxtd8fan2U4",
  authDomain: "job-portal-demo-ec294.firebaseapp.com",
  projectId: "job-portal-demo-ec294",
  storageBucket: "job-portal-demo-ec294.appspot.com",
  messagingSenderId: "133930743201",
  appId: "1:133930743201:web:e096226fe299eb036147e0",
};

// Initialize Firebase
// const app1 = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app1);

// export default app1;
export default app;
