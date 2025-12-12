import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";


import { app } from '../Firebase.config';

export const AuthContext = createContext();

const auth= getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  const createUser = (email, pass) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const signIn = (email, pass) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const updateuser = (updateddata) => {
    return updateProfile(auth.currentUser, updateddata);
  };

  const signinwithgoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        setuser(currentuser);
      } else {
        setuser(null);
      }
      setloading(false);
    });

    return () => unsubscribe();
  }, []);

  const authdata = {
    createUser,
    logOut,
    signIn,
    updateuser,
    loading,
    user,
    setuser,
    signinwithgoogle,
  };

  return (
    <AuthContext.Provider value={authdata}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
