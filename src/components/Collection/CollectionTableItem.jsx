import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function CollectionTableItem(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const options = [
    { label: "Not Learned", value: 1 },
    { label: "Plan to Learn", value: 2 },
    { label: "Learning", value: 3 },
    { label: "Learned", value: 4 },
  ];


  const handleSelectChange = (event) => {
    event.preventDefault();
    dispatch({
      type: "UPDATE_STATUS",
      payload: { status_id: event.target.value,  kanji: props.kanji,}
    });
  };

  const kanjiClicked = () => {
    history.push(`/kanji/${props.kanji}`);
  };

  return (
    <tr className={props.status}>
      <td><h1>{props.kanji}</h1></td>
      <td>
        {" "}
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
      </td>
      <td>
        <button className="button" onClick={kanjiClicked}>
            View Kanji
        </button>
      </td>
    </tr>
  );
}
