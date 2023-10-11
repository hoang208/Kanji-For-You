import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import "./KanjiDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function KanjiDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  const meanings = useSelector((store) => store.meanings);
  const kun = useSelector((store) => store.kun);
  const on = useSelector((store) => store.on);
  const status = useSelector((store) => store.status);

  useEffect(() => {
    dispatch({ type: "GET_MEANINGS", payload: params.kanji });
    dispatch({ type: "GET_KUN", payload: params.kanji });
    dispatch({ type: "GET_ON", payload: params.kanji });
    dispatch({ type: "GET_STATUS", payload: params.kanji });
  }, []);

  return (
    <div className="detailsContainer">
      <div className="cardCharacter">
        <div className="cardCharacterBody">
          <h1 className="cardCharacterTitle">{params.kanji}</h1>
        </div>
      </div>
      <div className="meanings">
        <h2>Meanings</h2>
        {meanings.map((meaning) => (
          <button className="meaningBtn" key={meaning} disabled>
            {meaning}
          </button>
        ))}
      </div>
      <div className="kunReadings">
        <h2>Kun Readings</h2>
        {kun.map((reading) => (
          <button className="kunBtn" key={reading} disabled>
            {reading}
          </button>
        ))}
      </div>
      <div className="onReadings">
        <h2>On Readings</h2>
        {on.map((reading) => (
          <button className="onBtn" key={reading} disabled>
            {reading}
          </button>
        ))}
      </div>
      <div className="status">
        <button disabled>{status}</button>
        <button className="editStatus">Edit</button>
      </div>
    </div>
  );
}
