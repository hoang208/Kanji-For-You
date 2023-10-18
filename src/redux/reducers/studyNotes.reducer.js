const studyNotes = (state = [], action) => {
  //Study notes from database
  switch (action.type) {
    case "SET_NOTES":
      return action.payload;
    default:
      return state;
  }
};

export default studyNotes;
