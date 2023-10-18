import { useEffect, useState } from "react";
import("./BackToTopButton.css");

export default function BackToTopButton() {
  //Back to top button state
  const [backToTopButton, setBackToTopButton] = useState(false);

  //Set back to top button state based on scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  //Scroll back up to the top
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      {backToTopButton && (
        <button className="button backTop" onClick={scrollUp}>
          ⬆
        </button>
      )}
    </div>
  );
}
