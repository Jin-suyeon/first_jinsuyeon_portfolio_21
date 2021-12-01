import React from "react";
import "../styles/Education.scss";
import { educationInfo } from "../asset/educationInfo";
import ScrollTop from "../components/ScrollTop";

function Education() {
  return (
    <div className="Education_container">
      <ScrollTop />
      <div className="Education">
        <div className="Education_explain_list">
          {educationInfo.map((info) => (
            <div className="list">
              <div className="day">{info.day}</div>
              <h2>{info.title}</h2>
              <div className="sub-title">{info.subTitle}</div>
              {info.texts.map((text) => (
                <div className="text">{text}</div>
              ))}
            </div>
          ))}
        </div>

        <div className="Education_title">
          <h1>Education</h1>
        </div>
      </div>
    </div>
  );
}

export default Education;
