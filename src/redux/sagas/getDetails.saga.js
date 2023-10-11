import axios from "axios";
import { put } from "redux-saga/effects";


function* getDetails(action) {
    // get kanji details from the API
    try {
      const details = yield axios.get(`/api/details/${action.payload}`);
      console.log("get all:", details.data);
      yield put({ type: "SET_DETAILS", payload: details.data });
    } catch {
      console.log("get all error");
    }
  }

  export default getDetails