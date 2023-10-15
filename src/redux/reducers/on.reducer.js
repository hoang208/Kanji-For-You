const on = (state = [], action) => {
  switch (action.type) {
    case "SET_ON":
      return action.payload;
    default:
      return state;
  }
};

export default on;
