import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function CollectionItem(props) {
  const history = useHistory();

  const kanjiClicked = () => {
    history.push(`/kanji/${props.kanji}`);
  };

  return (
    <div className={`card`}>
      <div className={`cardBody`}>
        <h1 className="cardTitle">{props.kanji}</h1>
        <h2>{props.status}</h2>
      </div>
      <button className="cardBtn" onClick={kanjiClicked}>
        View Kanji
      </button>
    </div>
  );
}
