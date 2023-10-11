import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DictionaryItem from "./DictionaryItem";
import "./Dictionary.css";

export default function Dictionary() {
const dispatch = useDispatch();
const kanji = useSelector(store=>store.kanji)
console.log("kanji",kanji)

const [searchText, setSearchText] = useState("");

let searchHandler = (event) => {
  //convert search text to lower case
  const lowerCase = event.target.value.toLowerCase();
  setSearchText(lowerCase);
};

// const filteredKanji = kanji.filter((kanjiletter) => {
//   //if no search then return the original
//   if (searchText === '') {
//       return kanjiletter;
//   }
//   //return item which contains search
//   else {
//       return kanjiletter && kanjiletter.toLowerCase().includes(searchText)
//   }
// })

useEffect(() => {
    dispatch({ type: "GET_KANJI" });
  }, []);

return(
    <div className="dictionaryContainer">
        <div className="search">
        <input type="text" className="searchInput" onChange={searchHandler} placeholder="Search Kanji..."></input>
        </div>
        <div className="cardWrapper">
        {kanji.slice(0, 12).map((kanjiletter) => (
          <DictionaryItem
            key={kanjiletter}
            kanji={kanjiletter}
          />
        ))}
        </div>
    </div>
)

}
