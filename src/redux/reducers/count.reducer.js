const count = (state = [], action) => {
  //Count of each status
  switch (action.type) {
    case "SET_COUNT":
      return action.payload;
    default:
      return state;
  }
};

export default count;
