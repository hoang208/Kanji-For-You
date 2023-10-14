import { useEffect } from "react";
import "./Collection.css";
import { useDispatch } from "react-redux";

export default function Collection() {
    const dispatch =useDispatch();

    useEffect(() => {
        dispatch({ type: "GET_ALL" });
      }, []);

  <div className="collectionContainer">
    <div></div>
    <div className="tableContainer">
        
    </div>
  </div>;
}
