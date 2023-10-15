import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import KanjiOfTheDayItem from "./KanjiOfTheDayItem";

export default function KanjiOfTheDay() {
  const dispatch = useDispatch();
  const kanji = useSelector((store) => store.kanji);

  useEffect(() => {
    dispatch({ type: "GET_KANJI" });
  }, []);

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  //calculate random numbers based off today's date
  let random1 = date + month + year;
  let random2 = year - month - date;
  let random3 = year - 2 * (month + date);

  return (
    <div className="container">
      <div className="search">
        <h1>KANJI OF THE DAY</h1>
      </div>
      <div className="cardWrapper">
        <KanjiOfTheDayItem key={kanji[random1]} kanji={kanji[random1]} />
        <KanjiOfTheDayItem key={kanji[random2]} kanji={kanji[random2]} />
        <KanjiOfTheDayItem key={kanji[random3]} kanji={kanji[random3]} />
      </div>
    </div>
  );
}
