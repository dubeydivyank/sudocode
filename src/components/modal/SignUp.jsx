import React from "react";
import { useState } from "react";
import "./SignUp.css";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import close from "../../svg/close.svg";
import googlelogo from "../../svg/google-logo.png";

const SignUp = ({ setLoginPage, setModalOpen, googleSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signUpHandler = async (e) => {
    e.preventDefault();
    console.log("clicked");
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        setModalOpen(false)
      );
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="form-container">
      <img
        src={close}
        alt="close-modal"
        id="close-modal"
        onClick={() => {
          setModalOpen(false);
        }}
      />

      <h1 className="modal-heading">Sign Up</h1>

      <input
        className="input-field"
        type="email"
        placeholder="Email Address"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <input
        className="input-field"
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button type="submit" onClick={signUpHandler} id="login-btn">
        Sign up
      </button>

      <div id="signin-google" onClick={googleSignIn}>
        <img src={googlelogo} alt="" />
        Continue with Google
      </div>

      <div
        className="redirect-modal"
        onClick={() => {
          setLoginPage(true);
        }}
      >
        Already have an account ?
      </div>

      {error && <div>{error}</div>}
    </div>
  );
};

export default SignUp;
