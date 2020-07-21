import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SerachDivision from "./search/SerachDivision";
import DetailsDivision from "./details/DetailsDivision";
import "./index.css";

function LandingPage(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <SerachDivision />
      <DetailsDivision />
      <div className="scrollToTop">
        <button onClick={scrollToTop}>
          <FontAwesomeIcon icon="chevron-up" size="lg" color="#FFFFFF" />
        </button>
      </div>
    </>
  );
}

export default LandingPage;
