import React from "react";
import { Link } from "react-router-dom";
import "../styles/BackButton.scss";
import { useDispatch } from "react-redux";
import { openIndexPage } from "../actions/IndexPage";

function BackButton() {
  const dispatch = useDispatch();

  return (
    <Link
      to="/"
      onClick={() => dispatch(openIndexPage())}
      className="BackButton_container"
    >
      <div className="BackButton">
        <img src="/icons/icon_arrow_up.svg" alt="arrow" />
      </div>
    </Link>
  );
}

export default BackButton;
