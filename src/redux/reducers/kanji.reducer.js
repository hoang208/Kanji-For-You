const kanjiReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_KANJI':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default kanjiReducer;
  