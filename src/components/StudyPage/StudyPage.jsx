import { useDispatch, useSelector } from "react-redux";
import Flashcard from "./Flashcard";
import "./StudyPage.css";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function StudyPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const all = useSelector((store) => store.all);

  useEffect(() => {
    dispatch({ type: "GET_ALL" });
  }, []);

  const filteredItems = all.filter((item) => item.status === "Learning");
  const random = Math.floor(Math.random() * filteredItems.length);

  const handleDictionary = () => {
    history.push("/dictionary");
  };

  return (
    <>
      {filteredItems.length ? (
        <div className="studyContainer">
          <div className="flashcardContainer">
            {filteredItems.slice(random, random + 1).map((item) => (
              <Flashcard
                key={item.id}
                kanji={item.kanji}
                status={item.status}
                notes={item.study_notes}
              />
            ))}
          </div>{" "}
        </div>
      ) : (
        <div className="errorContainer">
          <div>
            <h1>Ops!</h1>
            <p>
              You currently have no kanji marked as learning status to study.
            </p>
            <button className="button" onClick={handleDictionary}>
              Go to the dictionary to add kanji to study!
            </button>
          </div>
        </div>
      )}
    </>
  );
}
