import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="aboutContainer">
      <div id="aboutContent1">
      <p className="subHeader">What is Kanji For You?</p>
      <p>
        Kanji For You is a website meant to aid users in their journey to learn
        Japanese Kanji. The website serves as a Kanji dictionary for users.
        Users can search up a certain kanji. Information about the Kanji will be
        displayed such as meaning, readings, and example words that use the
        kanji. Additionally, users can add Kanji to their collection and mark
        their learning status for that particular kanji. This allows users to
        keep track of all the Kanji they are learning or have learned. Kanji For
        You uses kanjiapi.dev, an amazing api that provides information for over
        13,000 kanji.
      </p>
      <a href="https://kanjiapi.dev/">
        Click here to find out more about kanjiapi.dev
      </a>
      </div>
      <div id="aboutContent2">
      <p className="subHeader">Who made Kanji For You?</p>

      <p>
        Kanji For You was created by Paul HoangLong (that's me), a software
        developer based in Minnesota.
      </p>

      <a href="https://github.com/hoang208">Click here to see my GitHub</a>
      </div>
    </div>
  );
}

export default AboutPage;
