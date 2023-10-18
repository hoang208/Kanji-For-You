import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function CollectionItem(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  //Options in select
  const options = [
    { label: "Not Learned", value: 1 },
    { label: "Plan to Learn", value: 2 },
    { label: "Learning", value: 3 },
    { label: "Learned", value: 4 },
  ];

  //Updates status
  const handleSelectChange = (event) => {
    event.preventDefault();
    dispatch({
      type: "UPDATE_STATUS",
      payload: { status_id: event.target.value, kanji: props.kanji },
    });
  };

  //Sends user to details page for that kanji
  const kanjiClicked = () => {
    history.push(`/kanji/${props.kanji}`);
  };

  return (
    <div className="card">
      <div className="cardBody">
        <h1 className="cardTitle">{props.kanji}</h1>
        <select className="select" onChange={handleSelectChange}>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              selected={`${props.status === option.label ? `selected` : ""}`}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <button className="cardBtn" onClick={kanjiClicked}>
        View Kanji
      </button>
    </div>
  );
}
