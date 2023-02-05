
import React, {  useContext, useState, useEffect } from 'react';
import {
   createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged
   } from "firebase/auth";
import { createContext } from 'react';
import { auth } from "../firebase";



const userAuthContext = createContext()


export  function UserAuthContextProvider( { Children }) {
    const [currentUser, setCurrentUser] = useState("");

    const signUp=(email, password) =>
       createUserWithEmailAndPassword(auth, email, password)
    

    const Login=(email, password)=>
      signInWithEmailAndPassword(auth, email, password)
    

useEffect(() => {
  const clean = onAuthStateChanged(auth, (currentUSer) => {
    setCurrentUser(currentUSer);
  });
  return () => {
    clean();
  }
}, []);

    return <userAuthContext.Provider value={{currentUser, signUp}}> { Children } </userAuthContext.Provider>
}

export function useUserAuth() {
  return useContext(userAuthContext);
}