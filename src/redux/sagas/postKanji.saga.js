import axios from "axios";

export default function* postKanji(action) {
  //Post kanji from API to collection database
  try {
    yield axios.post("/api/kanji", action.payload);
  } catch (error) {
    console.log("error posting kanji", error);
  }
}
