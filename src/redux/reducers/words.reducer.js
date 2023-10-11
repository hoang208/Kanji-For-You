const words = (state = [], action) => {
    switch (action.type) {
      case 'SET_WORDS':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default words;
  