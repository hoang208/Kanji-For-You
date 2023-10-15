import axios from "axios";
import { put } from "redux-saga/effects";

function* deleteNotes(action) {
  try {
    const deleteNotes = yield axios.delete(
      `/api/collection/${action.payload.kanji}`,
      { data: { notes: action.payload.notes } }
    );
    yield put({ type: "GET_NOTES", payload: action.payload.kanji });
  } catch (error) {
    console.log("error DELETING notes", error);
  }
}

export default deleteNotes;
