import { useEffect, useState } from "react";
import "./Collection.css";
import { useDispatch, useSelector } from "react-redux";
import CollectionItem from "./CollectionItem";
import CollectionTableItem from "./CollectionTableItem";
import CollectionToolTip from "./CollectionToolTip";
import Spinner from "../Spinner/Spinner";

export default function Collection() {
  const dispatch = useDispatch();

  //Data
  const all = useSelector((store) => store.all);

  useEffect(() => {
    dispatch({ type: "GET_ALL" });
  }, []);

  //Filter states
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(all);

  //Table view state
  const [tableView, setTableView] = useState(false);

  //Filters
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
    filterItems();
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

  //Grid view click sets table view to false
  const handleGrid = () => {
    setTableView(false);
  };

  //Table view click sets table view to true
  const handleTable = () => {
    setTableView(true);
  };

  //Loading state
  const [loaded, setLoaded] = useState(false);

  //Loading when words gets updated
  useEffect(() => {
    setTimeout(setLoaded, 600, true);
  }, [all]);

  return (
    <div className="collectionContainer">
      {!loaded && <Spinner />}
      <div className="colectionHeader">
        <div className="collectionBorder">
          <div className="collectionTitleFilter">
            <h1 className="collectionTitle">Collection</h1>
            <CollectionToolTip text={"Click on the status to change it!"} />
            <div className="buttonGroup view">
              <button
                className={`filter ${tableView ? "" : "active"}`}
                onClick={handleGrid}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ color: "white" }}
                >
                  grid_view
                </span>
              </button>
              <button
                className={`filter ${tableView ? "active" : ""}`}
                onClick={handleTable}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ color: "white" }}
                >
                  view_list
                </span>
              </button>
            </div>
          </div>
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
          <div></div>
        </div>
      </div>
      {tableView ? (
        <div className="tableContainer">
          <div className="tableWrapper">
            <table className="table">
              <thead className="tableHeader">
                <tr>
                  <th>
                    <h1>Kanji</h1>
                  </th>
                  <th>
                    <h1>Status</h1>
                  </th>
                  <th>
                    <h1>Study Note</h1>
                  </th>
                  <th>
                    <h1>View</h1>
                  </th>
                </tr>
              </thead>
              <tbody className="tableBody">
                {filteredItems.length ? (
                  <>
                    {filteredItems.map((item) => (
                      <CollectionTableItem
                        key={item.id}
                        kanji={item.kanji}
                        status={item.status}
                        notes={item.study_notes}
                      />
                    ))}
                  </>
                ) : (
                  <tr>
                    <td colSpan="4">No Kanji with this status available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        // View if user has not added any kanji to this status
        <>
          <div className="cardWrapper infinite">
            {filteredItems.length ? (
              <>
                {filteredItems.map((item) => (
                  <CollectionItem
                    key={item.id}
                    kanji={item.kanji}
                    status={item.status}
                  />
                ))}
              </>
            ) : (
              <div className="errorContainer">
                <p>No Kanji with this status available</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
