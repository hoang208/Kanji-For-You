import { useEffect, useState } from "react";
import "./Collection.css";
import { useDispatch, useSelector } from "react-redux";
import CollectionItem from "./CollectionItem";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

export default function CollectionLoad() {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const count = params.count;
  const newCount = parseInt(count) + 20;
  const all = useSelector((store) => store.all);

  useEffect(() => {
    dispatch({ type: "GET_ALL" });
  }, []);

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(all);

  let filters = ["Not Learned", "Plan to Learn", "Learning", "Learned"];

  //set filters on button click
  const handleFilter = (status) => {
    if (selectedFilters.includes(status)) {
      let filters = selectedFilters.filter(
        (selectedStatus) => selectedStatus !== status
      );
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, status]);
    }
  };

  //filters item when filter is changed
  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  //prevents filtereditems being empty on refresh
  useEffect(() => {
    setFilteredItems(all);
  }, [all]);

  //filters item when filter is changed
  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((status) => {
        let temp = all.filter((item) => item.status === status);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...all]);
    }
  };

  const handleLoad = () => {
    history.push(`/collection/${newCount}`);
  };

  return (
    <div className="collectionContainer">
      <div className="colectionHeader">
        <div className="collectionBorder">
          <h1 className="collectionTitle">Collection</h1>
          <div className="buttonGroup">
            {filters.map((status, i) => (
              <button
                onClick={() => handleFilter(status)}
                className={`${
                  selectedFilters?.includes(status) ? `${status}` : ""
                }`}
                key={i}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="cardWrapper">
        {filteredItems.slice(0, count).map((item) => (
          <CollectionItem
            key={item.id}
            kanji={item.kanji}
            status={item.status}
          />
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
