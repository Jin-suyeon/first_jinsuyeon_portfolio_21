import "../styles/Main.scss";
import Index from "./Index";
import { useDispatch, useSelector } from "react-redux";
import { openIndexPage } from "../actions/IndexPage";

function Main() {
  const dispatch = useDispatch();
  const openIndex = useSelector((state) => state.IndexPageReducer);

  return (
    <div className="Main_container">
      <div className="Main">
        <div className="Main_background">
          <div>
            <span className="up">P</span>
            <span className="down">O</span>
            <span className="up">R</span>
            <span className="down">T</span>
            <span className="up">F</span>
            <span className="down">O</span>
            <span className="up">L</span>
            <span className="down">I</span>
            <span className="up">O</span>
          </div>
          <img
            onClick={() => dispatch(openIndexPage())}
            src="/icons/icon_arrow_up.svg"
            alt="arrow"
          />
        </div>
      </div>
      <div className={openIndex ? "Main_index_change" : "Main_index"}>
        <Index />
      </div>
    </div>
  );
}

export default Main;
