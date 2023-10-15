import axios from "axios";
import { put } from "redux-saga/effects";

function* getWords(action) {
  try {
    const words = yield axios.get(`/api/words/${action.payload}`);
    console.log("get all:", words.data);
    yield put({ type: "SET_WORDS", payload: words.data });
  } catch {
    console.log("get all error");
  }
}

export default getWords;
