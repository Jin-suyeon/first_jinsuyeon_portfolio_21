import React from "react";
import "../styles/Menu.scss";

function ScrollTop() {
  const scrollTop = () => {
    document.querySelector(".App").scrollTo(0, 0);
  };
  return (
    <div className="Menu_container">
      <div onClick={() => scrollTop()} className="Menu">
        <img src="/icons/icon_arrow_up.svg" alt="arrow" />
      </div>
    </div>
  );
}

export default ScrollTop;
