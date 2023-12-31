import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DictionaryItem from "./DictionaryItem";
import "./Dictionary.css";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

export default function Dictionary() {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  //Data
  const all = useSelector((store) => store.all);
  const kanji = all.map((item) => item.kanji);

  //Set amount of cards on page based off params
  const count = params.count ? params.count : 30;
  const newCount = parseInt(count) + 30;

  //Search text state
  const [searchText, setSearchText] = useState("");

  let searchHandler = (event) => {
    //convert search text to lower case
    const lowerCase = event.target.value.toLowerCase();
    setSearchText(lowerCase);
  };

  const filteredKanji = kanji.filter((kanjiletter) => {
    //if no search then return the original
    if (searchText === "") {
      return kanjiletter;
    }
    //return item which contains search
    else {
      return kanjiletter && kanjiletter.toLowerCase().includes(searchText);
    }
  });

  //Set count in params so display can be updated
  const handleLoad = () => {
    history.push(`/dictionary/${newCount}`);
  };

  useEffect(() => {
    dispatch({ type: "GET_ALL" });
  }, []);

  return (
    <div className="dictionaryContainer">
      <div className="search">
        <input
          type="text"
          className="searchInput"
          onChange={searchHandler}
          placeholder="Search Kanji..."
        ></input>
      </div>
      <div className="cardWrapper">
        {filteredKanji.slice(0, count).map((kanjiletter) => (
          <DictionaryItem key={kanjiletter} kanji={kanjiletter} />
        ))}
      </div>
      <div className="search">
        <button className="button load" onClick={handleLoad}>
          Load More Kanji
        </button>
      </div>
    </div>
  );
}
