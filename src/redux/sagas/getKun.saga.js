import axios from "axios";
import { put } from "redux-saga/effects";


function* getKun(action) {
    // get kanji kun from the API
    try {
      const details = yield axios.get(`/api/details/${action.payload}`);
      console.log("get all:", details.data);
      yield put({ type: "SET_KUN", payload: details.data.kun_readings });
    } catch {
      console.log("get all error");
    }
  }

  export default getKun