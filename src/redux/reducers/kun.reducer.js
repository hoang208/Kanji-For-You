const kun = (state = [], action) => {
  switch (action.type) {
    case "SET_KUN":
      return action.payload;
    default:
      return state;
  }
};

export default kun;
