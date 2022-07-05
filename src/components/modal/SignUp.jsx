import React from "react";
import { useState, useEffect } from "react";
import "./SignUp.css";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = ({ setLoginPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signUpHandler = async (e) => {
    e.preventDefault();
    console.log("clicked");
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup-form-container">
      <input
        type="email"
        placeholder="Email Address"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit" onClick={signUpHandler}>
        Sign Up
      </button>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          setLoginPage(true);
        }}
      >
        Click here to Login
      </div>
      {error && <div>{error}</div>}
    </div>
  );
};

export default SignUp;
