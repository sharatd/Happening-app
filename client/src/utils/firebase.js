// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithPopup, signOut } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJjf8J-CW6BmxzGag_OKfOJ0w4UtwI1Ys",
  authDomain: "xenah-dev-portal.firebaseapp.com",
  projectId: "xenah-dev-portal",
  storageBucket: "xenah-dev-portal.appspot.com",
  messagingSenderId: "1041728004730",
  appId: "1:1041728004730:web:58334d929ce1f48811d1c3",
  measurementId: "G-33K5WV83HC"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const signInWithGoogle = () => {
    signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
  };
  
export const firebaseSignOut = () => signOut(getAuth(firebase));

export const useUserState = () => {
    const [user, setUser] = useState();
  
    useEffect(() => {
      onIdTokenChanged(getAuth(firebase), (user) => {
          setUser(user)
        
      });
      
    }, []);
  
    return [user];
};