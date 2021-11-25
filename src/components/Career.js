import React from "react";
import "../styles/Career.scss";
import { careerInfo } from "../asset/careerInfo";

function Career() {
  return (
    <div className="Career_container">
      <div className="Career">
        {careerInfo.map((career) => (
          <div className="list">
            <div className="day">{career.day}</div>
            <h1>{career.title}</h1>

            <div className="explain_list">
              {career.texts.map((text) => (
                <div className="list_in">
                  <div className="circle"></div>
                  <div className="text">{text}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Career;
