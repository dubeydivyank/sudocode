import React from "react";
import { useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = ({ setLoginPage }) => {
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
    <div className="login-form-container">
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
      <button type="submit" onClick={loginHandler}>
        Login
      </button>
      <div>Sign in with Google</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          setLoginPage(false);
        }}
      >
        Don't have an Account? SignUp
      </div>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Login;
