import React from "react";
import { useState } from "react";
// import "./SignUp.css";
// import { auth } from "../../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import close from "../../svg/close.svg";
import googlelogo from "../../svg/google-logo.png";
import { useAuthContext } from "../../context/AuthContext";

const SignUp = ({ setLoginPage, setModalOpen, googleSignInHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useAuthContext();

  const signUpHandler = async (e) => {
    e.preventDefault();
    console.log("signup clicked");
    setError("");
    try {
      await signUp(email, password);
      setModalOpen(false);
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

      {error && <div className="error-alert">{error}</div>}
      <form onSubmit={signUpHandler}>
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
          Sign up
        </button>
      </form>
      <div id="signin-google" onClick={googleSignInHandler}>
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
    </div>
  );
};

export default SignUp;
