import React, { useState } from "react";
import "../styles/Stack.scss";
import { stackList } from "../asset/stackInfo";
import ScrollTop from "../components/ScrollTop";
import Front from "../components/Front";
import Back from "../components/Back";

function Stack() {
  const [choice, setChoice] = useState(false);
  return (
    <div className="Stack_container">
      <ScrollTop />
      <div className="Stack">
        <div className="Stack_title">
          <h1>Stack</h1>
        </div>
        <div className="Stack_lists">
          <button
            onClick={() => setChoice(false)}
            className={choice ? "list" : "list_change"}
          >
            Front-end
          </button>
          <button
            onClick={() => setChoice(true)}
            className={choice ? "list_change" : "list"}
          >
            Back-end / Database / Others
          </button>
        </div>
        <div className="Stack_types">{choice ? <Back /> : <Front />}</div>
      </div>
    </div>
  );
}

export default Stack;
