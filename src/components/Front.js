import React from "react";
import "../styles/Front.scss";
import { frontStackList } from "../asset/stackInfo";

function Front() {
  return (
    <div class="Front">
      {frontStackList.map((list) => (
        <div class="single-chart">
          <svg viewBox="0 0 36 36" className={`circular-chart ${list.class}`}>
            <path
              className="circle-bg"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="circle"
              stroke-dasharray={list.dash}
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className="percentage">
              {list.title}
            </text>
          </svg>
        </div>
      ))}
    </div>
  );
}

export default Front;
