import React from "react";
import "../styles/Stack.scss";
import BackButton from "../components/BackButton";

function Stack() {
  return (
    <div className="Stack_container">
      <BackButton />
      <div className="Stack">
        <div className="Stack_img">
          <h1>Stack</h1>
        </div>

        <div className="Stack_explain">
          <div className="Stack_kind">
            <h1>Front-end</h1>

            <div className="list">
              <div className="name">
                <div className="circle" />
                <div className="title">Javascript</div>
              </div>
              <div className="name">
                <div className="circle" />
                <div className="title">HTML</div>
              </div>
              <div className="name">
                <div className="circle" />
                <div className="title">CSS</div>
              </div>
              <div className="name">
                <div className="circle" />
                <div className="title">SCSS</div>
              </div>
              <div className="name">
                <div className="circle" />
                <div className="title">React</div>
              </div>
              <div className="name">
                <div className="circle" />
                <div className="title">Redux</div>
              </div>
            </div>
          </div>

          <div className="Stack_kind">
            <h1>Back-end</h1>

            <div className="list">
              <div className="name">
                <div className="circle" />
                <div className="title">express</div>
              </div>
              <div className="name">
                <div className="circle" />
                <div className="title">Node.js</div>
              </div>
            </div>
          </div>

          <div className="Stack_kind">
            <h1>Database</h1>

            <div className="list">
              <div className="name">
                <div className="circle" />
                <div className="title">MySQL</div>
              </div>
            </div>
          </div>

          <div className="Stack_kind">
            <h1>Others</h1>

            <div className="list">
              <div className="name">
                <div className="circle" />
                <div className="title">Git</div>
              </div>
              <div className="name">
                <div className="circle" />
                <div className="title">AWS(S3)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
