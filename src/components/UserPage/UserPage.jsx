import React from "react";
import { useSelector } from "react-redux";
import "./UserPage.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function UserPage() {
  const history = useHistory();

  const handleCollection = () => {
    history.push(`/collection`);
  };

  const handleDictionary = () => {
    history.push(`/dictionary`);
  };

  const handleKanjiOfTheDay = () => {
    history.push(`/kanjioftheday`);
  };

  const user = useSelector((store) => store.user);
  return (
    <div className="homeContainer">
      <h1>KANJI FOR YOU</h1>
      <h2>Welcome, {user.username}!</h2>
      <p>
        Keep track of all the kanji you have learned in your personal
        collection. <br></br>The website also serves as a simple kanji
        dictionary.
      </p>
      <p>
        Are you setup to learn Japanese? 
        <a href="https://learnjapanese.moe/font/"> Click here to make sure!</a>
      </p>
      <div className="buttonContainer">
        <button onClick={handleCollection}>COLLECTION</button>
        <button onClick={handleDictionary}>DICTIONARY</button>
        <button onClick={handleKanjiOfTheDay}>KANJI OF THE DAY</button>
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
