import axios from "axios";
import { put } from "redux-saga/effects";

function* putNotes(action) {
  //Update notes in collection API for that kanji
  try {
    const collection = yield axios.put(
      `/api/kanji/${action.payload.kanji}`,
      action.payload
    );
    console.log("put status:", collection.data);
    yield put({ type: "GET_NOTES", payload: action.payload.kanji });
  } catch {
    console.log("put status error");
  }
}

export default putNotes;
