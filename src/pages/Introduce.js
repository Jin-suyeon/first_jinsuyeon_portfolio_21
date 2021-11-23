import React from "react";
import BackButton from "../components/BackButton";
import "../styles/Introduce.scss";

function Introduce() {
  return (
    <div className="Introduce_container">
      <BackButton />
      <div className="Introduce">
        <div className="Introduce_myImg"></div>
        <div className="Introduce_explain">
          <h1>Introduce</h1>

          <div className="contant_container">
            <div className="main">진수연</div>
            <div className="contant">
              <div className="sub">
                <span>Mobile</span>
                <span>E-Mail</span>
                <span>Github</span>
                <span>Blog</span>
              </div>
              <div className="explain">
                <span>010-5414-1994</span>
                <span>wlstndus99@gmail.com</span>
                <a target="_blank" href="https://github.com/Jin-suyeon">
                  https://github.com/Jin-suyeon
                </a>
                <a target="_blank" href="www.notion.so/jinsuyeon">
                  www.notion.so/jinsuyeon
                </a>
              </div>
            </div>
          </div>

          <div className="my_introduce">
            저는 주변에 개발자인 친구가 있습니다.
            <br />그 친구를 만날 때마다 개발에 대한 얘기들을 많이 들었습니다.
            <br />그 얘기를 들으며 '내가 참여해서 만든 결과물을 사람들이 직접
            사용한다면 얼마나 뿌듯할까?'
            <br />
            라는 생각을 시작으로 흥미를 가지기 시작했고, 웹개발 부트캠프인
            코드스테이츠에 등록을 하며
            <br />
            코딩을 시작하게 되었습니다.
            <br />
            코드스테이츠에 들어와서 마지막 과정인 2주, 4주 프로젝트를 진행하며
            <br />
            여러가지 새로운 것들에 대해 공부해보고, 그것들을 직접 적용하면서
            <br />
            사이트가 구현되어가는 모습을 보았을 때 코딩을 시작한 계기인 "얼마나
            뿌듯할까?"의
            <br />
            감정을 실제로 느끼게 되었습니다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
