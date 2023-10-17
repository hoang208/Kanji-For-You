import { useEffect, useState } from "react";
import "./Collection.css";
import { useDispatch, useSelector } from "react-redux";
import CollectionItem from "./CollectionItem";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import CollectionTableItem from "./CollectionTableItem";

export default function Collection() {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const all = useSelector((store) => store.all);

  const count = params.count ? params.count : 30;
  const newCount = parseInt(count) + 30;

  useEffect(() => {
    dispatch({ type: "GET_ALL" });
  }, []);

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(all);
  const [tableView, setTableView] = useState(false);

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

  const handleGrid = () => {
    setTableView(false);
  };

  const handleTable = () => {
    setTableView(true);
  };

  return (
    <div className="collectionContainer">
      <div className="colectionHeader">
        <div className="collectionBorder">
          <div className="collectionTitleFilter">
            <h1 className="collectionTitle">Collection</h1>
            <div className="buttonGroup view">
              <button
                className={`filter ${tableView ? "" : "active"}`}
                onClick={handleGrid}
              >
                <svg
                  width="50px"
                  height="20px"
                  viewBox="0 0 15 15"
                  stroke="white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5 0.5H1.5C0.947715 0.5 0.5 0.947715 0.5 1.5V5.5C0.5 6.05228 0.947715 6.5 1.5 6.5H5.5C6.05228 6.5 6.5 6.05228 6.5 5.5V1.5C6.5 0.947715 6.05228 0.5 5.5 0.5Z"
                    stroke="#fff"
                  />
                  <path
                    d="M13.5 0.5H9.5C8.94772 0.5 8.5 0.947715 8.5 1.5V5.5C8.5 6.05228 8.94772 6.5 9.5 6.5H13.5C14.0523 6.5 14.5 6.05228 14.5 5.5V1.5C14.5 0.947715 14.0523 0.5 13.5 0.5Z"
                    stroke="#fff"
                  />
                  <path
                    d="M13.5 8.5H9.5C8.94772 8.5 8.5 8.94772 8.5 9.5V13.5C8.5 14.0523 8.94772 14.5 9.5 14.5H13.5C14.0523 14.5 14.5 14.0523 14.5 13.5V9.5C14.5 8.94772 14.0523 8.5 13.5 8.5Z"
                    stroke="#fff"
                  />
                  <path
                    d="M5.5 8.5H1.5C0.947715 8.5 0.5 8.94772 0.5 9.5V13.5C0.5 14.0523 0.947715 14.5 1.5 14.5H5.5C6.05228 14.5 6.5 14.0523 6.5 13.5V9.5C6.5 8.94772 6.05228 8.5 5.5 8.5Z"
                    stroke="#fff"
                  />
                </svg>
              </button>
              <button
                className={`filter ${tableView ? "active" : ""}`}
                onClick={handleTable}
              >
                <svg
                  width="50px"
                  height="20px"
                  viewBox="0 0 16 16"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path fill="#fff" d="M0 0h4v3h-4v-3z"></path>
                  <path fill="#fff" d="M0 4h4v3h-4v-3z"></path>
                  <path fill="#fff" d="M0 12h4v3h-4v-3z"></path>
                  <path fill="#fff" d="M0 8h4v3h-4v-3z"></path>
                  <path fill="#fff" d="M5 0h11v3h-11v-3z"></path>
                  <path fill="#fff" d="M5 4h11v3h-11v-3z"></path>
                  <path fill="#fff" d="M5 12h11v3h-11v-3z"></path>
                  <path fill="#fff" d="M5 8h11v3h-11v-3z"></path>
                </svg>
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
                    <td colSpan="4">No Kanji  with this status available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <>
          <div className="cardWrapper">
            {filteredItems.length ? (
              <>
                {filteredItems.slice(0, count).map((item) => (
                  <CollectionItem
                    key={item.id}
                    kanji={item.kanji}
                    status={item.status}
                  />
                ))}
              </>
            ) : (
              <div className="errorContainer">
                <p>No Kanji  with this status available</p>
              </div>
            )}
          </div>
          {filteredItems.length ? (
          <div className="search">
            <button className="button load" onClick={handleLoad}>
              Load More Kanji
            </button>
          </div>) : ('')}
        </>
      )}
    </div>
  );
}
