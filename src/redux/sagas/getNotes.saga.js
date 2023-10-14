import axios from "axios";
import { put } from "redux-saga/effects";


function* getNotes(action) {
    try {
      const collection = yield axios.get(`/api/collection/${action.payload}`);
      console.log("get all:", collection.data);
      yield put({ type: "SET_NOTES", payload: collection.data[0].study_notes });
    } catch {
      console.log("get all error");
    }
  }

  export default getNotes