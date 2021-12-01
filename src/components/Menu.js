import React from "react";
import "../styles/Menu.scss";

function Menu() {
  const pageChange = (e) => {
    const id = e.target.id.split("_")[1];
    const el = document.getElementById(id);
    const pos = el.getBoundingClientRect();
    document.querySelector(".App").scrollTo(0, pos.top);
  };

  return (
    <div className="Menu_container">
      <div className="Menu">i</div>
      <div className="Menu_list">
        <button id="Menu_s1" onClick={(e) => pageChange(e)}>
          Main
        </button>
        <button id="Menu_s2" onClick={(e) => pageChange(e)}>
          Introduce
        </button>
        <button id="Menu_s3" onClick={(e) => pageChange(e)}>
          Stack
        </button>
        <button id="Menu_s4" onClick={(e) => pageChange(e)}>
          Education
        </button>
        <button id="Menu_s5" onClick={(e) => pageChange(e)}>
          Career
        </button>
        <button id="Menu_s6" onClick={(e) => pageChange(e)}>
          Project
        </button>
      </div>
    </div>
  );
}

export default Menu;
