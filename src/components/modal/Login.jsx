import React from "react";
import { useState } from "react";
import "./Login.css";
import close from "../../svg/close.svg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import googlelogo from "../../svg/google-logo.png";

const Login = ({ setLoginPage, setModalOpen, googleSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password).then;
      setModalOpen(false)();
    } catch (error) {
      console.log(error);
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

      {error && <div className="error-alert">{error}</div>}
      <form onSubmit={loginHandler}>
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

        <button type="submit" id="login-btn">
          Login
        </button>
      </form>
      <div id="signin-google" onClick={googleSignIn}>
        <img src={googlelogo} alt="" />
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
    </div>
  );
};

export default Login;
