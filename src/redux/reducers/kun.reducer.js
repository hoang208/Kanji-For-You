const kun = (state = [], action) => {
  //Kun from API
  switch (action.type) {
    case "SET_KUN":
      return action.payload;
    default:
      return state;
  }
};

export default kun;
