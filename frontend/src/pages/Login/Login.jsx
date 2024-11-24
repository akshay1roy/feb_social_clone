import React, { useContext, useRef } from "react";
import "./Login.css";
// import { LoginFailure } from "../../context/AuthAction";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";
// import { useNavigate } from "react-router-dom";

export default function Login() {
  const email = useRef();
  const password = useRef();
  // const navigate=useNavigate();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );

    
    // console.log(email.current.value)
  };

  // console.log(user);

  return (
    <div className="login">
      <div className="title">
        <h3 className="loginLogo">FebSocial</h3>
        <span className="loginDesc">
          Connect with Friends and the World around you{" "}
        </span>
      </div>
      <div className="loginWrapper">
        <div className="loginLeft">
          <img src="/assets/register.png" alt="" className="image" />
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              type="email"
              required
              placeholder="Email "
              className="loginInput"
              ref={email}
            />
            <input
              type="password"
              placeholder="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                " Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
