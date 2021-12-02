import React from "react";
import "../styles/Gunsigi.scss";

function MrGreen() {
  return (
    <div className="Gunsigi_conatiner">
      <h1 className="Gunsigi_title">PROJECT</h1>
      <div className="Gunsigi">
        <div className="Gunsigi_site">
          <img src="/images/mrGreen.webp" alt="gunsigi" />
        </div>
        <div className="Gunsigi_explain">
          <img src="/images/logo_mrGreen.webp" alt="gunsigi_logo" />
          <div className="text">
            당신을 위한 식물 큐레이터 mr.Green이 반려 식물을 추천해 드립니다
            <br />
            다양한 테마별 식물 추천 목록을 살펴보고,
            <br />
            마음에 드는 식물 정보도 확인해 보세요
          </div>
          <div className="buttons">
            <button>
              <a
                href="https://github.com/codestates/mrGreen"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB
              </a>
            </button>
            <button>
              <a
                href="http://mrgreen--client--deploy.s3-website.ap-northeast-2.amazonaws.com/"
                target="_blank"
                rel="noreferrer"
              >
                SITE
              </a>
            </button>
          </div>
        </div>
      </div>
      <h1 className="Gunsigi_title2">02</h1>
    </div>
  );
}

export default MrGreen;
