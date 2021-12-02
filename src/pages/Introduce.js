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
          <span>Click</span>
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
          <span>Click</span>
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
            안녕하세요 재미있는 개발을 하고 싶은 프론트엔드 개발자
            <span> 진수연</span>입니다.
            <br />
            저는 디자인 직종에 있던 사람입니다.
            <br />
            회사를 다니던 중 코로나 이슈로 같은 직종의 회사들의 사정이
            안좋아지면서,
            <br />
            커리어전환을 생각하다가 전부터 흥미를 가지고 있던 코딩에 대해
            생각하게되었습니다.
            <br /> 그 후 몇달동안의 고민 끝에 부트캠프인 코드스테이츠에
            들어가게되었습니다.
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
