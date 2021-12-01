import Menu from "../components/Menu";
import "../styles/Main.scss";

function Main() {
  return (
    <div className="Main_container">
      <Menu />
      <div className="Main_background">
        <div className="title">SUYEON'S PORTFOLIO.</div>
        <div className="sub_title">FRONT END DEVELOPER</div>
        <div className="scroll">
          <span>SCROLL DOWN</span>
          <img src="/icons/icon_arrow_up.svg" alt="arrow" />
        </div>
      </div>
    </div>
  );
}

export default Main;
