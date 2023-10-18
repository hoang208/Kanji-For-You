const status = (state = [], action) => {
  //Status from database
  switch (action.type) {
    case "SET_STATUS":
      return action.payload;
    default:
      return state;
  }
};

export default status;
