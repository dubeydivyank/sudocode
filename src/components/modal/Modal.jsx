import React from "react";
import { useState } from "react";
import "./Modal.css";
import Login from "./Login";
import SignUp from "./SignUp";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import close from "../../svg/close.svg";

const Modal = ({ user, setModalOpen }) => {
  const [loginPage, setLoginPage] = useState(true);

  const logoutHandler = () => {
    signOut(auth);
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
          <Login setLoginPage={setLoginPage} setModalOpen={setModalOpen} />
        ) : (
          <SignUp setLoginPage={setLoginPage} setModalOpen={setModalOpen} />
        )}
      </div>
    </div>
  );
};

export default Modal;
