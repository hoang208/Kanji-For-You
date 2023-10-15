import axios from "axios";

export default function* postKanji(action) {
  try {
    yield axios.post("/api/kanji", action.payload);
  } catch (error) {
    console.log("error posting kanji", error);
  }
}
