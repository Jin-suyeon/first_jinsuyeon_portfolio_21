import React from "react";
import "../styles/Introduce.scss";

function Introduce() {
  const showInroduce = () => {
    const arrow = document.getElementsByClassName("Introduce_click");
    const columnChange = document.getElementById("Introduce");
    const IntroduceExplain = document.getElementById("Introduce_explain");
    const whiteBackground = document.getElementById("white-background");
    const sticker = document.getElementById("img_sticker");
    const IntroduceImg = document.getElementById("Introduce_img");

    whiteBackground.style.zIndex = "500";
    whiteBackground.style.opacity = "1";
    whiteBackground.style.display = "flex";

    setTimeout(() => {
      whiteBackground.style.transition = "all 1s";
      whiteBackground.style.opacity = "0";
    }, 100);

    setTimeout(() => {
      whiteBackground.style.display = "none";
    }, 1000);

    for (let i = 0; i < arrow.length; i++) {
      arrow[i].style.display = "none";
    }

    columnChange.style.flexDirection = "row";
    IntroduceExplain.style.display = "flex";
    sticker.style.opacity = "0";
    IntroduceImg.style.cursor = "auto";
  };

  return (
    <div className="Introduce_container">
      <div id="white-background"></div>
      <div id="Introduce">
        <div className="Introduce_click">
          <span>CLICK</span>
          <img
            className="change-arrow"
            src="/icons/icon_arrow_up.svg"
            alt="arrow"
          />
        </div>

        <div onClick={() => showInroduce()} id="Introduce_img">
          <span id="img_sticker">ABOUT ME</span>
        </div>

        <div className="Introduce_click">
          <img src="/icons/icon_arrow_up.svg" alt="arrow" />
          <span>CLICK</span>
        </div>

        <div id="Introduce_explain">
          <button className="resume">
            <a
              href="https://jinsuyeon.notion.site/822305e9ce6745f0888120bcdc2347a5"
              rel="noreferrer"
              target="_blank"
            >
              RESUME
            </a>
          </button>

          <div className="explain">
            안녕하세요 주니어 프론트엔드 프론트엔드 개발자 <span>진수연</span>
            입니다.
            <br />
            저는 코드스테이츠 부트캠프에서 팀원들과의 협업, 코드리뷰 등으로
            <br />
            페어프로그래밍 기반 과제 진행과 2번의 협업프로젝트를 진행했습니다.
            <br />
            사용자 입장에서 개발하기 위해 계속 고민하고
            <br /> 더 나은 방향에 대해 팀원들과 소통하는 것을 중요시합니다.
            <br /> 저는 사용자가 오래 머무를 수 있는 web을 개발하고 싶은 개발자,
            <br />더 나은 내일을 위해 노력하는 프론트엔드 개발자가 제
            목표입니다.
          </div>

          <div className="contant">
            <div>
              <span>Mobile</span>
              <span>010-5414-1994</span>
            </div>
            <div>
              <span>E-Mail</span>
              <span>wlstndus99@gmail.com</span>
            </div>
            <div>
              <span>Github</span>
              <a
                href="https://github.com/Jin-suyeon"
                rel="noreferrer"
                target="_blank"
              >
                https://github.com/Jin-suyeon
              </a>
            </div>
            <div>
              <span>Blog</span>
              <a
                rel="noreferrer"
                href="https://jinsuyeon.notion.site/"
                target="_blank"
              >
                https://jinsuyeon.notion.site/
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
