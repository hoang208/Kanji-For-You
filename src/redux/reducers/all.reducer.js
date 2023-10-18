const all = (state = [], action) => {
  // All information needed from collection
  switch (action.type) {
    case "SET_ALL":
      return action.payload;
    default:
      return state;
  }
};

export default all;
