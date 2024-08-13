import React from 'react'
// import app from '../firebase/firebase.config';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";


const Login = () => {

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleLogin = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log(user);
          
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    };
  return (
    <div className="h-screen mx-auto container flex items-center justify-center">
        <button className='bg-blue px-8 py-2 text-white' onClick={handleLogin}>Login</button>

    </div>
  )
}

export default Login