import React from "react";
import "../styles/TwoProject.scss";

function TwoProject() {
  return (
    <div className="TwoProject_container">
      <div className="desktop">
        <div className="img">
          <img src="/images/web_5.webp" alt="" />
        </div>
      </div>

      <div className="TwoProject">
        <div className="TwoProject_img">
          <div></div>
          <div className="texts">
            <div className="title">
              <h1>4week-Project</h1>
              <h2>Gunsigi</h2>
            </div>

            <div className="sub_text">
              <span className="comma_left">"</span>
              <div className="text">
                건강기능식품을 타입별, 종류별 다양한 조건으로 검색해보고
                <br /> 필요한 건강기능식품의 상세 정보도 확인해 보세요
                <br /> 사용자들의 생생한 리뷰와 사진도 살펴볼 수 있습니다
              </div>
              <span className="comma_right">"</span>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div></div>

          <div className="link">
            <div>
              <div>Gunsigi Site</div>
              <button>CLICK</button>
            </div>
            <div>
              <div>Gunsigi Github</div>
              <button>CLICK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoProject;
