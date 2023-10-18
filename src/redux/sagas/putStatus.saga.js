import axios from "axios";
import { put } from "redux-saga/effects";

function* putStatus(action) {
    //Update status in collection API for that kanji
  try {
    const collection = yield axios.put(
      `/api/collection/${action.payload.kanji}`,
      action.payload
    );
    console.log("put status:", collection.data);
    yield put({ type: "GET_STATUS", payload: action.payload.kanji });
  } catch {
    console.log("put status error");
  }
}

export default putStatus;
