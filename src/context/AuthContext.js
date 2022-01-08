import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import {getFirestore, getDocs, collection} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCz2F-KG-qU0YkKvBsMLpzAIs50_bevAb8",
  authDomain: "react-crud-8a873.firebaseapp.com",
  projectId: "react-crud-8a873",
  storageBucket: "react-crud-8a873.appspot.com",
  messagingSenderId: "166762420977",
  appId: "1:166762420977:web:559770bc50402984d2e750",
  measurementId: "G-SXC3LTBG56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = getFirestore(app);

const auth = getAuth(app);

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);

  const login = (userEmail, userPassword) => {
    return signInWithEmailAndPassword(auth, userEmail, userPassword);
  }

  const logout = () => {
    return signOut(auth);
  }

  const newUser = (userEmail, userPassword) => {
    return createUserWithEmailAndPassword(auth, userEmail, userPassword);
  }

  const getUsers = () => {
    const querySnapshot = getDocs(collection(db, "users"));

    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });
    return querySnapshot;
  }

  useEffect(() => {
    const loggedInUser = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    })

    return loggedInUser;
  });


  const contexts = {
    currentUser,
    newUser,
    login,
    logout,
    getUsers,

  }

  return (
    <AuthContext.Provider value={contexts}>
      {!loading && children}
    </AuthContext.Provider>
  );

}