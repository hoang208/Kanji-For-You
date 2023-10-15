import axios from "axios";
import { put } from "redux-saga/effects";

function* getStatus(action) {
  try {
    const collection = yield axios.get(`/api/collection/${action.payload}`);
    console.log("get all:", collection.data);
    yield put({ type: "SET_STATUS", payload: collection.data[0].status });
    yield put({ type: "GET_ALL" });
  } catch {
    console.log("get all error");
  }
}

export default getStatus;
