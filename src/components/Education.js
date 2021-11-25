import React from "react";
import "../styles/Education.scss";
import { educationInfo } from "../asset/educationInfo";

function Education() {
  return (
    <div className="Education_container">
      <div className="Education">
        {educationInfo.map((info) => (
          <div className="list">
            <div className="day">{info.day}</div>
            <h1>{info.title}</h1>
            <div className="explain">{info.subTitle}</div>

            <div className="explain_list">
              {info.texts.map((text) => (
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

export default Education;
