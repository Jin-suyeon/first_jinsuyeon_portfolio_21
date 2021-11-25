import React from "react";
import "../styles/Stack.scss";
import BackButton from "../components/BackButton";
import { stackInfo } from "../asset/stackInfo";

function Stack() {
  return (
    <div className="Stack_container">
      <BackButton />
      <div className="Stack">
        <div className="Stack_img">
          <h1>Stack</h1>
        </div>

        <div className="Stack_explain">
          {stackInfo.map((info) => (
            <div className="Stack_kind">
              <h1>{info.title}</h1>

              <div className="list">
                {info.texts.map((text) => (
                  <div className="name">
                    <div className="circle" />
                    <div className="title">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stack;
