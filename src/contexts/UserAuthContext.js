
import React, {  useContext, useState, useEffect } from 'react';
import {
   createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged
   } from 'firebase/auth';
import { createContext } from 'react';
import { auth } from "../firebase";

export function useUserAuth() {
  return useContext(userAuthContext);
}

 const userAuthContext = createContext();

  export function UserAuthContextProvider( {Children} ) {
    const [currentUser, setCurrentUser] = useState('');

     function signUp(email, password){
       createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password){
      signInWithEmailAndPassword(auth, email, password);
    }

useEffect(() => {
  const clean = onAuthStateChanged(auth, (currentUSer) => {
    setCurrentUser(currentUSer);
  });
  return () => {
    clean();
  }
}, []);

    return <userAuthContext.Provider value={{signUp, currentUser }}> {Children } </userAuthContext.Provider>
}





