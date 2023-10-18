import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./UserPage.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function UserPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  //Data
  const kanji = useSelector((store) => store.kanji);

  //Sends users to page of whatever button they clicked
  const handleCollection = () => {
    history.push(`/collection`);
  };

  const handleDictionary = () => {
    history.push(`/dictionary`);
  };

  const handleKanjiOfTheDay = () => {
    history.push(`/kanjioftheday`);
  };

  useEffect(() => {
    dispatch({ type: "GET_KANJI" });
    dispatch({
      type: "POST_KANJI",
      payload: {
        kanji: kanji,
      },
    });
  }, []);

  //Sends kanji got from API to be stored in database
  useEffect(() => {
    dispatch({
      type: "POST_KANJI",
      payload: {
        kanji: kanji,
      },
    });
  }, [kanji]);

  const user = useSelector((store) => store.user);
  return (
    <div className="homeContainer">
      <h1>KANJI FOR YOU</h1>
      <h2>Welcome, {user.username}!</h2>
      <p>
        Keep track of all the kanji you have learned in your own personal
        collection. <br />
        Easily search up any{" "}
        <a href="https://en.wikipedia.org/wiki/J%C5%8Dy%C5%8D_kanji">
          jōyō
        </a>{" "}
        kanji in the dictionary!
      </p>
      <p>
        Are you setup to learn japanese?{" "}
        <a href="https://learnjapanese.moe/font/">Click here to make sure!</a>
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
