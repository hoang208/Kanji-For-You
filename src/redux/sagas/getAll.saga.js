import axios from "axios";
import { put } from "redux-saga/effects";

function* getAll() {
  try {
    const all = yield axios.get(`/api/all`);
    console.log("get all:", all.data);
    yield put({ type: "SET_ALL", payload: all.data });
  } catch {
    console.log("get all error");
  }
}

export default getAll;
