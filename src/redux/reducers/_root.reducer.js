import { combineReducers } from "redux";
import errors from "./errors.reducer";
import user from "./user.reducer";
import kanji from "./kanji.reducer";
import status from "./status.reducer";
import meanings from "./meanings.reducer";
import kun from "./kun.reducer";
import on from "./on.reducer";
import words from "./words.reducer";
import studyNotes from "./studyNotes.reducer";
import all from "./all.reducer";
import count from "./count.reducer"

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  kanji, //Contains list of Kanji
  status, //Contains status
  meanings, //contain meaning
  kun,
  on,
  words,
  studyNotes,
  all,
  count
});

export default rootReducer;
