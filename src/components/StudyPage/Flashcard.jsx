import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Flashcard(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  //Flip state
  const [flip, setFlip] = useState(false);

  //Data
  const meanings = useSelector((store) => store.meanings);

  useEffect(() => {
    dispatch({ type: "GET_MEANINGS", payload: props.kanji });
  }, []);

  const handleNext = () => {
    dispatch({ type: "GET_ALL" });
  };

  //Sends user to details page for kanji
  const handleView = () => {
    history.push(`/kanji/${props.kanji}`);
  };

  //Marks kanji as learned
  const handleLearned = () => {
    dispatch({
      type: "UPDATE_STATUS",
      payload: {
        status_id: 4,
        kanji: props.kanji,
      },
    });
  };

  return (
    <>
      <div
        className={`flashcard ${flip ? "flip" : ""}`}
        onClick={() => setFlip(!flip)}
      >
        <div className="front">
          <h1>{props.kanji}</h1>
        </div>
        <div className="back">
          <div className="flashcardSection">
            <h2 className="flashcardLabel">Meanings</h2>
            {meanings.map((meaning) => (
              <p key={meaning} className="flashcardAnswers">
                {meaning}
              </p>
            ))}
          </div>
          <div className="flashcardSection">
            <h2 className="flashcardLabel">Study Notes</h2>
            <p className="flashcardAnswers">
              {props.notes.length ? props.notes : "No notes"}
            </p>
          </div>
        </div>
      </div>
      <div className="flashcardButtonGroup">
        <button className="cardBtn" onClick={handleView}>
          View
        </button>
        <button className="cardBtn save" onClick={handleLearned}>
          Learned
        </button>
        <button className="button" onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
}
