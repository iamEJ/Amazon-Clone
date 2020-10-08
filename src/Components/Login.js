import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./CSS/Login.css";
import { auth } from "../firebase.js";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault(); //stops the refresh
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //login in successfuly, redirect to home page
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // created a user, login and redirect
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__image"
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button type="submit" onClick={login} className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="login__amazonAccountButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
