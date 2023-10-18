import axios from "axios";
import { put } from "redux-saga/effects";

function* getMeanings(action) {
  //Get meanings from API
  try {
    const details = yield axios.get(`/api/details/${action.payload}`);
    console.log("get all:", details.data);
    yield put({ type: "SET_MEAININGS", payload: details.data.meanings });
  } catch {
    console.log("get all error");
  }
}

export default getMeanings;
