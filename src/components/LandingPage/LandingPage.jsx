import React from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const history = useHistory();

  //Sends users to registration page
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
                Kanji For You is a website meant to aid you in your journey to
                learn Japanese kanji. <br />
                The website serves as a kanji dictionary. You can search up any
                jōyō kanji. Information about the kanji will be displayed such
                as meaning, readings, and example words that use the kanji.{" "}
                <br />
                Additionally, you can add kanji to your collection and mark the
                learning status for that particular kanji. <br />
                This allows you to keep track of all the kanji you are learning
                or have learned. <br />
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
      </div>
    </div>
  );
}

export default LandingPage;
