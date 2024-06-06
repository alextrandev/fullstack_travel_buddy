import { useEffect, useState } from "react";
import "./StickyButtons.css";

const StickyButtons = () => {
  const [showButton, setShowButton] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false)
    }, 3000)
  }

  return (
    <>
      <div className="button-container">
        {showButton && (
          <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <button className="back-to-top-button" onClick={scrollUp}>
              <span className="material-symbols-outlined">
                arrow_upward
              </span>
            </button>
            <button className="share-button" onClick={copyLink}>
              <span className="material-symbols-outlined">
                share
              </span>
            </button>
          </>
        )}
      </div>
      {showPopup && <div className="share-button-popup"><p>Copied!</p></div>}
    </>
  );
};

export default StickyButtons;
