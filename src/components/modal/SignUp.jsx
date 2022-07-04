import React from "react";
import "./SignUp.css";

const SignUp = ({ setLoginPage }) => {
  return (
    <div className="signup-form-container">
      <input type="email" name="" id="" />
      <input type="password" name="" id="" />
      <button type="submit">Sign Up</button>
      <button
        onClick={() => {
          setLoginPage(true);
        }}
      >
        Click here to Login
      </button>
    </div>
  );
};

export default SignUp;
