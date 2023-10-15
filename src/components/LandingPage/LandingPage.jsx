import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const history = useHistory();

  const handleRegister = () => {
    history.push("/registration");
  };

  return (
    <div className="welcomeContainer">
      <h1>Welcome to Kanji For You!</h1>
      <div className="aboutContainer">
        <div className="heroSection">
          <div className="heroBox">
            <div className="heroTitle left">
              <h1 className="subHeader">What is Kanji For You?</h1>
            </div>
            <div className="heroContent">
              <p>
                Kanji For You is a website meant to aid users in their journey
                to learn Japanese Kanji. <br />
                The website serves as a Kanji dictionary for users. Users can
                search up a certain kanji. Information about the Kanji will be
                displayed such as meaning, readings, and example words that use
                the kanji. <br />
                Additionally, users can add Kanji to their collection and mark
                their learning status for that particular kanji. <br />
                This allows users to keep track of all the Kanji they are
                learning or have learned. <br />
                Kanji For You uses{" "}
                <a href="https://kanjiapi.dev/">kanjiapi.dev</a>, an amazing api
                that provides information for over 13,000 kanji.
              </p>

              <button className="button edit" onClick={handleRegister}>
                Register for Kanji For You
              </button>
            </div>
          </div>
        </div>
        <div className="heroSection">
          <div className="heroBox">
            <div className="heroContent">
              <p>
                Kanji For You was created by Paul HoangLong (that's me), a
                software developer based in Minnesota.
              </p>

              <a href="https://github.com/hoang208">
                <button className="button edit">Check out my GitHub</button>
              </a>
            </div>
            <div className="heroTitle right">
              <h1 className="subHeader">Who made Kanji For You?</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
