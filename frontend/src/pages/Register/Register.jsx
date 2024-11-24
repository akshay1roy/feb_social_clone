import React, { useRef } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import { useHistory} from "react-router"

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate=useNavigate();
  // const history=useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if(password.current.value !== passwordAgain.current.value){
       passwordAgain.current.setCustomValidity("Password don't match !")
    }
    else{
        const user={
          username:username.current.value,
          email:email.current.value,
          password:password.current.value,
        }

        try {
          await axios.post("/auth/register", user);
          navigate("/login");
          
        } catch (error) {
          console.log(error)
        }
    }
  };

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
          <form className="registerBox" onSubmit={handleClick}>
            <input
              type="text"
              placeholder="Username"
              required
              ref={username}
              className="registerInput"
            />

            <input
              type="email"
              placeholder="Email "
              className="registerInput"
              required
              ref={email}
            />
            <input
              type="text"
              placeholder="Password "
              minLength="6"
              required
              ref={password}
              className="registerInput"
            />
            <input
              type="password"
              placeholder="password"
              className="registerInput"
              required
              ref={passwordAgain}
            />
            <button className="registerButton"  type="submit">Sign Up</button>
            <span className="registerForgot">Forgot Password</span>
            <button className="registerloginButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
