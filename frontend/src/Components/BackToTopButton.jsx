import React from "react";
import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffec(() => {
    window.addEventListener("Scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  });
  return <div></div>;
};

export default BackToTop;
