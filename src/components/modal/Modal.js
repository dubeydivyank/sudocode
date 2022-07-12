import React from "react";
import { useState } from "react";
import "./Modal.css";
import Login from "./Login";
import SignUp from "./SignUp";
// import { signOut } from "firebase/auth";
// import { auth } from "../../firebase";
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthContext } from "../../context/AuthContext";

import close from "../../svg/close.svg";

// const Modal = ({ user, setModalOpen }) => {
const Modal = ({ setModalOpen }) => {
  const [loginPage, setLoginPage] = useState(true);

  const { user, logOut, googleSignIn } = useAuthContext();

  const logoutHandler = async () => {
    try {
      await logOut().then(setModalOpen(false));
    } catch (error) {
      console.log(error.message);
    }
  };

  const googleSignInHandler = async () => {
    // const googleAuthProvider = new GoogleAuthProvider();
    // return signInWithPopup(auth, googleAuthProvider);
    await googleSignIn();
  };

  if (user) {
    return (
      <div className="modal-container">
        <div className="modal userDetails">
          <img
            id="close-modal"
            src={close}
            alt="close-modal"
            onClick={() => {
              setModalOpen(false);
            }}
          />
          <div id={"user-email"}>{user.email}</div>
          <button onClick={logoutHandler} id={"logout-btn"}>
            Log Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-container">
      <div className="modal">
        {loginPage ? (
          <Login
            setLoginPage={setLoginPage}
            setModalOpen={setModalOpen}
            googleSignInHandler={googleSignInHandler}
          />
        ) : (
          <SignUp
            setLoginPage={setLoginPage}
            setModalOpen={setModalOpen}
            googleSignInHandler={googleSignInHandler}
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
