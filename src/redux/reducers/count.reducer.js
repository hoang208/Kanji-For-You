const count = (state = [], action) => {
  switch (action.type) {
    case "SET_COUNT":
      return action.payload;
    default:
      return state;
  }
};

export default count