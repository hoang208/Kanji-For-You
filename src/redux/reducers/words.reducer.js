const words = (state = [], action) => {
  //Words from API
  switch (action.type) {
    case "SET_WORDS":
      return action.payload;
    default:
      return state;
  }
};

export default words;
