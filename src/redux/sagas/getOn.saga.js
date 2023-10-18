import axios from "axios";
import { put } from "redux-saga/effects";

function* getOn(action) {
  //Get on readings from API
  try {
    const details = yield axios.get(`/api/details/${action.payload}`);
    console.log("get all:", details.data);
    yield put({ type: "SET_ON", payload: details.data.on_readings });
  } catch {
    console.log("get all error");
  }
}

export default getOn;
