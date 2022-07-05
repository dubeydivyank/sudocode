import React from "react";
import { useState } from "react";
import "./Login.css";

const Login = ({ setLoginPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login-form-container">
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
      <div>Sign in with Google</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          setLoginPage(false);
        }}
      >
        Don't have an Account? SignUp
      </div>
    </div>
  );
};

export default Login;
