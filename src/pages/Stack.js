import "../styles/Stack.scss";
import { stackList } from "../asset/stackInfo";

function Stack() {
  const pageChange = () => {
    const stackTitle = document.getElementById("Stack_title");
    stackTitle.style.left = "100vw";

    setTimeout(() => {
      stackTitle.style.display = "none";
    }, 1000);
  };

  return (
    <div className="Stack_container">
      <div id="Stack_title">
        <div className="title">
          <h1>STACK</h1>
        </div>
        <div className="white">
          <img
            onClick={() => pageChange()}
            src="/icons/icon_arrow_up.svg"
            alt="arrow"
          />
        </div>
      </div>

      <div className="Stack">
        <h1 className="title2">STACK</h1>
        <div className="Stack_lists">
          {stackList.map((info) => (
            <div>
              <img className={info.class} src={info.img} alt="js" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stack;
