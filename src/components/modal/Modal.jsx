import React from "react";
import { useState } from "react";
import "./Modal.css";
import Login from "./Login";
import SignUp from "./SignUp";

const Modal = () => {
  const [loginPage, setLoginPage] = useState(true);
  return (
    <div className="modal-container">
      <div className="modal">{loginPage ? <Login /> : <SignUp />}</div>
    </div>
  );
};

export default Modal;
