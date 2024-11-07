import React from "react";
import "./Register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="title">
        <h3 className="registerLogo">FebSocial</h3>
        <span className="registerDesc">
          Connect with Friends and the World around you{" "}
        </span>
      </div>
      <div className="registerWrapper">
        <div className="registerLeft">
          <img src="/assets/register.png" alt="" className="image" />
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input type="text" placeholder="Username" className="registerInput" />

            <input
              type="email"
              placeholder="Email "
              className="registerInput"
            />
            <input type="text"  placeholder="Password " className="registerInput"/>
            <input
              type="password"
              placeholder="password"
              className="registerInput"
            />
            <button className="registerButton">Sign Up</button>
            <span className="registerForgot">Forgot Password</span>
            <button className="registerloginButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
