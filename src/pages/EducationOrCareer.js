import React, { useState } from "react";
import "../styles/EducationOrCareer.scss";
import BackButton from "../components/BackButton";
import Career from "../components/Career";
import Education from "../components/Education";

function EducationOrCareer() {
  const [currentTab, setCurrentTab] = useState(false);

  return (
    <div className="EducationOrCareer_container">
      <BackButton />
      <div className="EducationOrCareer">
        <div className="EducationOrCareer_img">
          <h1>Education</h1>
          <h1>&</h1>
          <h1>Career</h1>
        </div>
        <div className="EducationOrCareer_toggle">
          <div className="toggle">
            <span
              onClick={() => setCurrentTab(false)}
              className={currentTab ? "none-color" : "color"}
            >
              Education
            </span>
            <span
              onClick={() => setCurrentTab(true)}
              className={currentTab ? "color" : "none-color"}
            >
              Career
            </span>
          </div>
          <div className="line"></div>
          {currentTab ? <Career /> : <Education />}
        </div>
      </div>
    </div>
  );
}

export default EducationOrCareer;
