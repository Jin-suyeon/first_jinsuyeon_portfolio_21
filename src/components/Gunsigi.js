import React from "react";
import "../styles/Gunsigi.scss";

function Gunsigi() {
  return (
    <div className="Gunsigi_conatiner">
      <h1 className="Gunsigi_title">PROJECT</h1>
      <div className="Gunsigi">
        <div className="Gunsigi_site">
          <img src="/images/gunsigi.png" alt="gunsigi" />
        </div>
        <div className="Gunsigi_explain">
          <img src="/images/logo_gunsigi.png" alt="gunsigi_logo" />
          <div className="text">
            건강기능식품을 다양한 조건으로 검색하고
            <br />
            상세 정보도 확인해 보세요
            <br />
            사용자들의 생생한 리뷰와 사진도 살펴볼 수 있습니다
          </div>
          <div className="buttons">
            <button>
              <a
                href="https://github.com/codestates/Gunsigi"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB
              </a>
            </button>
            <button>
              <a
                href="https://www.gunsigi.com/"
                target="_blank"
                rel="noreferrer"
              >
                SITE
              </a>
            </button>
          </div>
        </div>
      </div>
      <h1 className="Gunsigi_title2">01</h1>
    </div>
  );
}

export default Gunsigi;
