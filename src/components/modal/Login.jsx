import React from "react";
import "./Login.css";

const Login = ({ setLoginPage }) => {
  return (
    <div className="login-form-container">
      <input type="email" name="" id="" />
      <input type="password" name="" id="" />
      <button type="submit">Login</button>
      <button
        onClick={() => {
          setLoginPage(false);
        }}
      >
        Create an account?
      </button>
    </div>
  );
};

export default Login;
