// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDgrWWtOyYYdek2-VAC8io5BmbD5YxsCOw",

  authDomain: "acrostock-ff5cf.firebaseapp.com",

  projectId: "acrostock-ff5cf",

  storageBucket: "acrostock-ff5cf.appspot.com",

  messagingSenderId: "577762719670",

  appId: "1:577762719670:web:3bafef12291ba9c75cb317",

  measurementId: "G-B64DJKVVVN",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);

  const newUser = (userEmail, userPassword) => {
    return createUserWithEmailAndPassword(auth, userEmail, userPassword);
  };

  const login = (userEmail, userPassword) => {
    return signInWithEmailAndPassword(auth, userEmail, userPassword);
  };

  const logout = () => {
    signOut(auth);
  };

  const getData = async () => {
    // const collection = collection(db, "yung pangalan ng collection")
    const user = doc(db, "users", "bascojulian31@gmail.com");
    const userData = await getDoc(user);
    const snapUserData = userData.data();
    return snapUserData;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  });

  const value = {
    currentUser,
    newUser,
    login,
    logout,
    getData,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
