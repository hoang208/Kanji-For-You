import axios from "axios";
import { put } from "redux-saga/effects";

function* getKanji() {
  //Get Kanji from API
  try {
    const kanji = yield axios.get("/api/kanji");
    console.log("get all:", kanji.data);
    yield put({ type: "SET_KANJI", payload: kanji.data });
  } catch {
    console.log("get all error");
  }
}

export default getKanji;
