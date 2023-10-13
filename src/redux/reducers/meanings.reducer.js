const meaningsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_MEAININGS':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default meaningsReducer;