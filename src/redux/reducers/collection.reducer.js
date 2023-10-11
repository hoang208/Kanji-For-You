const collectionReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_COLLECTION':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default collectionReducer;
  