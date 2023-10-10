import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";

// CUSTOM COMPONENTS
import RegisterForm from "../RegisterForm/RegistrationForm";

function LandingPage() {
  const [heading, setHeading] = useState("Welcome");
  const history = useHistory();

  const onLogin = (event) => {
    history.push("/login");
  };

  return (
    <div className="container">
      <h1>{heading}</h1>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p className="subHeader">What is Kanji For You?</p>
          <p>
            Kanji For You is a website meant to aid users in their journey to
            learn Japanese Kanji.
          </p>
          <p>
            The website serves as a Kanji dictionary for users. Users can search
            up a certain kanji. Information about the Kanji will be displayed
            such as meaning, readings, and example words that use the kanji.
          </p>
          <p>
            Additionally, users can add Kanji to their collection and mark their learning
            status for that particular kanji. This allows users to keep track of all the Kanji they are
            learning or have learned.
          </p>
          <p>
            Kanji For You uses kanjiapi.dev, an amazing api that provides
            information for over 13,000 kanji.
          </p>
          <a href="https://kanjiapi.dev/">
            Click here to find out more about kanjiapi.dev
          </a>
          <p className="subHeader">Who made Kanji For You?</p>

          <p>
            Kanji For You was created by Paul HoangLong (that's me), a software
            developer based in Minnesota.
          </p>

          <a href="https://github.com/hoang208">
            Click here to see my GitHub
          </a>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
