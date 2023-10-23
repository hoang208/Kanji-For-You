import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function StudyStart() {
  const history = useHistory();

  //Sends users to flashcard page
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
              journey to learn kanji! <br />
              You can study any kanji that you have marked as learning throught
              the use of flashcards! <br />
              The front of the flashcard will display the kanji character.
              <br />
              The meanings and any study notes you have written for the
              kanji will be displayed on the back. <br />
              You can then either move on to the next card, or mark the card as
              learned. Additionally, you can also choose to view the dictionary
              page for the kanji.
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
