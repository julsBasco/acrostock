import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, getDocs, collection } from "firebase/firestore";

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
  };

  const logout = () => {
    return signOut(auth);
  };

  const newUser = (userEmail, userPassword) => {
    return createUserWithEmailAndPassword(auth, userEmail, userPassword);
  };

  const getUsers = () => {
    const querySnapshot = getDocs(collection(db, "users"));

    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });
    return querySnapshot;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(true);
    });

    return unsubscribe;
  }, []);

  const contexts = {
    currentUser,
    newUser,
    login,
    logout,
    getUsers,
  };

  return (
    <AuthContext.Provider value={contexts}>
      {loading && children}
    </AuthContext.Provider>
  );
};
