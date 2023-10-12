import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import "./KanjiDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Word from "./Word";

export default function KanjiDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  const meanings = useSelector((store) => store.meanings);
  const kun = useSelector((store) => store.kun);
  const on = useSelector((store) => store.on);
  const status = useSelector((store) => store.status);
  const words = useSelector((store) => store.words);
  const notes = useSelector((store) => store.studyNotes);

  console.log("status", status);

  useEffect(() => {
    dispatch({ type: "GET_MEANINGS", payload: params.kanji });
    dispatch({ type: "GET_KUN", payload: params.kanji });
    dispatch({ type: "GET_ON", payload: params.kanji });
    dispatch({ type: "GET_STATUS", payload: params.kanji });
    dispatch({ type: "GET_WORDS", payload: params.kanji });
    dispatch({ type: "GET_NOTES", payload: params.kanji });
  }, []);

  return (
    <div className="detailsContainer">
      <div className="cardCharacter">
        <div className="cardCharacterBody">
          <h1 className="cardCharacterTitle">{params.kanji}</h1>
        </div>
      </div>
      <div className="kanjiInfo">
        <div className="info">
          <div className="detailsLabel">
            <h2 className="detailsLabel"> Meanings</h2>
          </div>
          <div className="detailsInfo">
            {meanings.map((meaning) => (
              <p className="details meaning" key={meaning} disabled>
                {meaning}
              </p>
            ))}
          </div>
        </div>
        <div className="info">
          <div className="detailsLabel">
            <h2>Kun</h2>
          </div>
          <div className="detailsInfo">
            {kun.map((reading) => (
              <p className="details kun" key={reading} disabled>
                {reading}
              </p>
            ))}
          </div>
        </div>
        <div className="info">
          <div className="detailsLabel">
            <h2 className="detailsLabel">On</h2>
          </div>
          <div className="detailsInfo">
            {" "}
            {on.map((reading) => (
              <p className="details on" key={reading} disabled>
                {reading}
              </p>
            ))}
          </div>
        </div>
        <div className="info">
          <div className="detailsLabel">
            <h2>Status</h2>
          </div>
          <div className="statusInfo">
            <p className="details status">{status}</p>
            <button className="editStatus">Edit</button>
          </div>
        </div>
      </div>
      <div className="words">
        <h2>Words</h2>
        {words.map((word, i) => (
          <Word
            key={i}
            meanings={word.meanings[0].glosses}
            variants={word.variants[0].written}
          />
        ))}
      </div>
      <div className="studyNotes">
        <h2>Study Notes</h2>
        {notes.length ? (
          <p>{notes}</p>
        ) : (
          <p>
            You have no study notes for this kanji.{" "}
            <Link className="navLink" to="/kanji/:kanji/add">
              Click here to add notes.
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
