import { useState } from "react";

export default function CollectionToolTip({ text, children }) {
  const [isVisible, setIsVisible] = useState(false);
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
        {isVisible && <div className="tooltip">{text}</div>}
      </div>
    </>
  );
}
