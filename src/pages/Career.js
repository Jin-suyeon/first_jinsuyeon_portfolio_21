import React from "react";
import "../styles/Career.scss";
import { careerInfo } from "../asset/careerInfo";

function Career() {
  return (
    <div className="Career_container">
      <div className="Career">
        <div className="Career_title">
          <div className="circle_title">Career</div>
          <svg className="circle_day">
            <circle className="packet" cx="600" cy="100" r="20" />
          </svg>
        </div>
        <div className="Career_explains"></div>
      </div>
    </div>
  );
}

export default Career;
