import axios from "axios";
import { put } from "redux-saga/effects";

function* getAll() {
  //Get all information from collection
  try {
    const all = yield axios.get(`/api/all`);
    console.log("get all:", all.data);
    yield put({ type: "SET_ALL", payload: all.data });
  } catch {
    console.log("get all error");
  }
}

export default getAll;
