import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function StudyStart() {
  const history = useHistory();

  const handleStudy = () => {
    history.push("/study/flashcard");
  };

  return (
    <div className="aboutContainer studystart">
      <div className="heroSection">
        <div className="heroBox">
          <div className="heroTitle left">
            <h1 className="subHeader">Study Kanji</h1>
          </div>
          <div className="heroContent">
            <p>
              Kanji For You's study section is meant to aid users in their
              journye to learn kanji! <br />
              Any kanji that has their status marked as learning will be abled
              to be studied. <br />
              The kanji marked as learning will be displayed randomly as
              flashcards for the user to practice their knowledge of the kanji!
              <br />
              The meanings and any study notes the user has written for the
              kanji will be displayed on the back!
            </p>
            <button className="button edit" onClick={handleStudy}>
              Start Studying!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
