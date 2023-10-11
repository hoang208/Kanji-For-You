import axios from "axios";
import { put } from "redux-saga/effects";


function* getCollection(action) {
    // get collection for specific kanji from database
    try {
      const collection = yield axios.get(`/api/collection/${action.payload}`);
      console.log("get all:", collection.data);
      yield put({ type: "SET_COLLECTION", payload: collection.data });
    } catch {
      console.log("get all error");
    }
  }

  export default getCollection