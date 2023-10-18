import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./RegistrationForm.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  //Focus state
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  //Set focus
  const handleUsernameFocus = (event) => {
    setUsernameFocused(true);
  };

  const handlePasswordFocus = (event) => {
    setPasswordFocused(true);
  };

  //Sends users info to database
  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: "REGISTER",
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="form" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div className="formInput">
        <label htmlFor="username"> Username</label>

        <input
          type="text"
          name="username"
          value={username}
          required
          pattern="^[A-Za-z0-9]{3,16}$"
          onChange={(event) => setUsername(event.target.value)}
          onBlur={handleUsernameFocus}
          focused={usernameFocused.toString()}
        />
        <span>
          Username should be 3-16 characters and shouldn't include any special
          characters
        </span>
      </div>
      <div className="formInput">
        <label htmlFor="password"> Password </label>

        <input
          type="password"
          name="password"
          value={password}
          required
          pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
          onChange={(event) => setPassword(event.target.value)}
          onBlur={handlePasswordFocus}
          onFocus={() => setPasswordFocused(true)}
          focused={passwordFocused.toString()}
        />
        <span>
          Password should be at least 8 characters and include 1 letter, 1
          number, and 1 special character
        </span>
      </div>
      <button className="button">Register</button>
      <Link className="registerLink" to="/login">
        Sign In
      </Link>
    </form>
  );
}

export default RegisterForm;
