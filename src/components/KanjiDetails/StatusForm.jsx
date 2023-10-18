import { useState } from "react";
import { useDispatch } from "react-redux";

export default function StatusForm({ setFormOpen, kanji }) {
  const dispatch = useDispatch();

  //Status state
  const [statusToUpdate, setStatusToUpdate] = useState({
    status_id: 1,
    kanji: kanji,
  });

  //Options with each status
  const options = [
    { label: "Not Learned", value: 1 },
    { label: "Plan to Learn", value: 2 },
    { label: "Learning", value: 3 },
    { label: "Learned", value: 4 },
  ];

  //Update state to reflect value of option
  const handleSelectChange = (event) => {
    setStatusToUpdate({ ...statusToUpdate, status_id: event.target.value });
  };

  //Put dispatch and closes modal
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "UPDATE_STATUS",
      payload: statusToUpdate,
    });
    handleClose();
  };

  //Closes modal
  const handleClose = () => {
    setFormOpen(false);
  };

  return (
    <div
      className="statusFormContainer"
      onClick={(e) => {
        if (e.target.className === "statusFormContainer") {
          handleClose();
        }
      }}
    >
      <div className="statusForm">
        <form onSubmit={handleSubmit} className="form">
          <h2>Choose a Status</h2>
          <select className="select" onChange={handleSelectChange}>
            {options.map((option) => (
              <option key={option.value} value={option.value} defaultValue={1}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="statusFormBtns">
            <button type="submit" className="button statusBtn save">
              Save
            </button>
            <button className="button statusBtn cancel" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
