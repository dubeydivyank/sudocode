import React from "react";
import { useState } from "react";
import "./Login.css";
import close from "../../svg/close.svg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import googlelogo from "../../svg/google-logo.png";

const Login = ({ setLoginPage, setModalOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
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

      <h1 className="modal-heading">Login</h1>

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

      <button type="submit" onClick={loginHandler} id="login-btn">
        Login
      </button>

      <div id="signin-google">
        <img src={googlelogo} />
        Continue with Google
      </div>

      <div
        className="redirect-modal"
        onClick={() => {
          setLoginPage(false);
        }}
      >
        Don't have an Account ?
      </div>

      {error && <div>{error}</div>}
    </div>
  );
};

export default Login;
