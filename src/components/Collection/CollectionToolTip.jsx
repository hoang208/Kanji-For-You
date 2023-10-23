import { useState } from "react";

export default function CollectionToolTip() {
  //Tooltip visible status
  const [isVisible, setIsVisible] = useState(false);

  //On hover, sets visible status to true
  return (
    <>
      <div className="tooltipContainer">
        <span
          className="material-symbols-outlined"
          style={{ color: "white" }}
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          info
        </span>
        {isVisible && (
          <div className="tooltip">
            <p>Click on the status to change it!</p>
          </div>
        )}
      </div>
    </>
  );
}
