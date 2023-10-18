import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function DictionaryItem(props) {
  const history = useHistory();

  //Sends user to details page for that kanji
  const kanjiClicked = () => {
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
