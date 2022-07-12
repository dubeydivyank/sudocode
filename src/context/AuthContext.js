import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const authContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  function logIn(email, passoword) {
    return signInWithEmailAndPassword(auth, email, passoword);
  }

  function signUp(email, passoword) {
    return createUserWithEmailAndPassword(auth, email, passoword);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <authContext.Provider value={{ user, logIn, signUp, googleSignIn, logOut }}>
      {children}
    </authContext.Provider>
  );
}

export function useAuthContext() {
  // useContext(authContext);
  const userAuthContext = useContext(authContext);
  if (!userAuthContext) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }
  return userAuthContext;
}
