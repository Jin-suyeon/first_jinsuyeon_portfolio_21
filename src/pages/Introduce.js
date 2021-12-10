import React from "react";
import "../styles/Introduce.scss";

function Introduce() {
  const showInroduce = () => {
    const whiteBackground = document.getElementById("white-background");
    const Introduce = document.getElementById("Introduce");
    const IntroduceAbout = document.getElementById("Intoroduce_About");

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

    Introduce.style.display = "none";
    IntroduceAbout.style.display = "flex";
  };

  return (
    <div className="Introduce_container">
      <div id="white-background" />
      <div id="Intoroduce_About">
        {/* <div className="Introduce_img_About" /> */}
        <img
          src="/images/suyeon.webp"
          alt="me"
          className="Introduce_img_About"
        />

        <div className="Introduce_explain">
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
            개발을 접하기 전, 디자인과를 전공하며 해당 직종에 종사했습니다.
            <br />
            업무 중 회사 사이트를 만드는 업무를 담당하게 되었고,
            <br />웹 사이트 제작 회사와 미팅을 거치며 "직접 사이트를 만들어 보면
            어떨까?" 라는
            <br />
            생각을 시작으로 개발에 대한 관심이 생겼습니다.
            <br />
            자기주도적 학습을 강조하는 코드스테이츠에서 JavaScript, React, CSS
            등을 배우며,
            <br />
            페어 프로그래밍을 기반으로 한 과제와 협업 프로젝트 2번의 경험이
            있습니다.
            <br />
            프로젝트를 진행하면서 좋은 사용자 경험을 위한 고민을 하며 프로젝트에
            임하였으며,
            <br />
            팀장으로서 더 나은 방향에 대한 의견을 주고받으며 커뮤니케이션 능력을
            키웠습니다.
            <br />
            수료 후 프로젝트 리팩토링과 TypeScript에 대해 공부하고 있습니다.
            <br />더 나아가는 개발자가 되기 위해 성장하며,
            <br />
            사용자에게 매력적으로 느껴져 머물고 싶은 웹을 개발하는 개발자가
            되고싶습니다.
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

      <div id="Introduce">
        <div className="Introduce_click">
          <span>CLICK</span>
          <img
            className="change-arrow"
            src="/icons/icon_arrow_up.svg"
            alt="arrow"
          />
        </div>

        <div onClick={() => showInroduce()} className="Introduce_img">
          <span>ABOUT ME</span>
        </div>

        <div className="Introduce_click">
          <img src="/icons/icon_arrow_up.svg" alt="arrow" />
          <span>CLICK</span>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
