const on = (state = [], action) => {
  //On reading from API
  switch (action.type) {
    case "SET_ON":
      return action.payload;
    default:
      return state;
  }
};

export default on;
