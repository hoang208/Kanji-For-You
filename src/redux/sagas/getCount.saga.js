import axios from "axios";
import { put } from "redux-saga/effects";
;

function* getCount() {
  //Get count of each status
  try {
    const count = yield axios.get(`/api/count`);
    console.log("count", count.data);
    yield put({ type: "SET_COUNT", payload: count.data });
  } catch (error) {
    console.log("error getting poster", error);
  }
}

export default getCount