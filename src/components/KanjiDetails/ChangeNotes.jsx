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

export default function ChangeNotes() {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  const [formOpen, setFormOpen] = useState(false);

  const meanings = useSelector((store) => store.meanings);
  const kun = useSelector((store) => store.kun);
  const on = useSelector((store) => store.on);
  const status = useSelector((store) => store.status);
  const words = useSelector((store) => store.words);
  const notes = useSelector((store) => store.studyNotes);
  const kanji = params.kanji;

  const [noteToUpdate, setNoteToUpdate] = useState({
    notes: notes,
    kanji: kanji,
  });

  console.log("status", status);

  useEffect(() => {
    dispatch({ type: "GET_MEANINGS", payload: params.kanji });
    dispatch({ type: "GET_KUN", payload: params.kanji });
    dispatch({ type: "GET_ON", payload: params.kanji });
    dispatch({ type: "GET_STATUS", payload: params.kanji });
    dispatch({ type: "GET_WORDS", payload: params.kanji });
    dispatch({ type: "GET_NOTES", payload: params.kanji });
  }, []);

  const handleNotesChange = (event) => {
    setNoteToUpdate({ ...noteToUpdate, notes: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "UPDATE_NOTES",
      payload: noteToUpdate,
    });
    history.push(`/kanji/${params.kanji}`);
  };

  const handleCancel = () => {
    console.log("cancel button pushed");
    history.push(`/kanji/${params.kanji}`);
  };

  return (
    <div className="detailsContainer">
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
            <p className={`details status ${status}`}>{status}</p>
            <button className="button edit" onClick={() => setFormOpen(true)}>
              Edit
            </button>
          </div>
        </div>
      </div>
      <div className="words">
        <h2 className="wordTitle">Words</h2>
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
        <div className="textareaContainer">
          <form onSubmit={handleSubmit}>
            <textarea
              className="textarea"
              placeholder="You have no study notes for this kanji..."
              onChange={handleNotesChange}
              defaultValue={notes}
              maxLength="1000"
            ></textarea>
            <div className="addNotesBtn">
              <button className="button statusBtn save">{params.change}</button>
              <button
                className="button statusBtn cancel"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      {formOpen &&
        createPortal(
          <StatusForm setFormOpen={setFormOpen} kanji={kanji} />,
          document.body
        )}
    </div>
  );
}
