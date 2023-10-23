import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import "./KanjiDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Word from "./Word";
import StatusForm from "./StatusForm";
import { createPortal } from "react-dom";
import DeleteModal from "./DeleteModal";
import Spinner from "../Spinner/Spinner";

export default function KanjiDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  //Modal state
  const [formOpen, setFormOpen] = useState(false);
  //Delete confirmation state
  const [confimartionOpen, setConfimarionOpen] = useState(false);

  //Data
  const meanings = useSelector((store) => store.meanings);
  const kun = useSelector((store) => store.kun);
  const on = useSelector((store) => store.on);
  const status = useSelector((store) => store.status);
  const words = useSelector((store) => store.words);
  const notes = useSelector((store) => store.studyNotes);
  const kanji = params.kanji;

  useEffect(() => {
    dispatch({ type: "GET_MEANINGS", payload: params.kanji });
    dispatch({ type: "GET_KUN", payload: params.kanji });
    dispatch({ type: "GET_ON", payload: params.kanji });
    dispatch({ type: "GET_STATUS", payload: params.kanji });
    dispatch({ type: "GET_WORDS", payload: params.kanji });
    dispatch({ type: "GET_NOTES", payload: params.kanji });
  }, []);

  //Loading state
  const [loaded, setLoaded] = useState(false);

  //Loading when words gets updated
  useEffect(() => {
    setTimeout(setLoaded, 600, true);
  }, [words]);

  const handleEdit = () => {
    history.push(`/kanji/${params.kanji}/Save`);
  };

  return (
    <div className="detailsContainer">
      {!loaded && <Spinner />}
      <div className="cardCharacter">
        <h1 className="cardCharacterTitle">{params.kanji}</h1>
      </div>
      <div className="kanjiInfo">
        <div className="info">
          <div className="detailsLabel">
            <h2 className="detailsLabel"> Meanings</h2>
          </div>
          <div className="detailsInfo">
            {meanings.map((meaning) => (
              <p className="details meaning" key={meaning}>
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
              <p className="details kun" key={reading}>
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
              <p className="details on" key={reading}>
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
            <p className={`details status ${status}`}>{status}</p>
            <button className="button edit" onClick={() => setFormOpen(true)}>
              Edit
            </button>
          </div>
        </div>
      </div>
      <div className="words">
        <h2 className="wordTitle">Words</h2>
        <div className="wordList">
          {words.map((word, i) => (
            <Word
              key={i}
              meanings={word.meanings[0].glosses}
              variants={word.variants[0].written}
            />
          ))}
        </div>
      </div>
      <div className="studyNotes">
        <h2>Study Notes</h2>
        {notes.length ? (
          <div className="textareaContainer">
            <p className="textarea notes">{notes}</p>
            <div className="addNotesBtn">
              <button className="button statusBtn edit" onClick={handleEdit}>
                Edit
              </button>
              <button
                className="button statusBtn cancel"
                onClick={() => setConfimarionOpen(true)}
              >
                Delete
              </button>
            </div>
          </div>
        ) : (
          <p>
            You have no study notes for this kanji.{" "}
            <Link className="navLink" to={`/kanji/${params.kanji}/Add`}>
              Click here to add notes.
            </Link>
          </p>
        )}
      </div>
      {/* Confimartion and Modal  */}
      {formOpen &&
        createPortal(
          <StatusForm setFormOpen={setFormOpen} kanji={kanji} />,
          document.body
        )}
      {confimartionOpen &&
        createPortal(
          <DeleteModal setConfimarionOpen={setConfimarionOpen} kanji={kanji} />,
          document.body
        )}
    </div>
  );
}
