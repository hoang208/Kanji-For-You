const kanjiReducer = (state = [], action) => {
  //Kanji from API
  switch (action.type) {
    case "SET_KANJI":
      return action.payload;
    default:
      return state;
  }
};

export default kanjiReducer;
