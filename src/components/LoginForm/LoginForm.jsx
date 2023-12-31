import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./LoginForm.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  //Checks if username and password is valid
  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: "LOGIN",
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  }; // end login

  return (
    <form onSubmit={login} className="form">
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div className="formInput">
        <label htmlFor="username">Username</label>
        <input
          className="formInput"
          type="text"
          name="username"
          placeholder=""
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="formInput">
        <label htmlFor="password">Password</label>
        <input
          className="formInput"
          type="password"
          name="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button className="button">Log In</button>
      <Link className="registerLink" to="/registration">
        Register
      </Link>
    </form>
  );
}

export default LoginForm;
