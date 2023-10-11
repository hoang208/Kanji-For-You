import axios from "axios";
import { put } from "redux-saga/effects";

export default function* postKanji(action) {
    try {
      yield axios.post("/api/kanji", action.payload);
    //   yield put({ type: "FETCH_MOVIES" });
    } catch (error) {
      console.log("error posting kanji", error);
    }
  }