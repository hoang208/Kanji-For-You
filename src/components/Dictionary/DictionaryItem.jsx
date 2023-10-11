import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function DictionaryItem(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const kanjiClicked = () => {
    dispatch({
      type: "POST_KANJI",
      payload: {
        kanji: props.kanji,
      },
    });
    history.push(`/kanji/${props.kanji}`);
  };

  return (
    <div className="card">
      <div className="cardBody">
        <h1 className="cardTitle">{props.kanji}</h1>
      </div>
      <button className="cardBtn" onClick={kanjiClicked}>
        View Kanji
      </button>
    </div>
  );
}
