import { useDispatch } from "react-redux";

export default function DeleteModal({ setConfimarionOpen, kanji }) {
  const dispatch = useDispatch();

  //Closes modal
  const handleClose = () => {
    setConfimarionOpen(false);
  };

  //Delete dispatch and closes modal
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "DELETE_NOTES",
      payload: { notes: "", kanji: kanji },
    });
    handleClose();
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
          <div className="statusFormContent">
            <h1>Delete this study note?</h1>
            <p>You will not be able to undo this action.</p>
          </div>
          <div className="statusFormBtns">
            <button type="submit" className="button statusBtn save">
              Yes
            </button>
            <button className="button statusBtn cancel" onClick={handleClose}>
              No
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
