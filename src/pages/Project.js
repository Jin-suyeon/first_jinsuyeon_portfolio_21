import React from "react";
import Gunsigi from "../components/Gunsigi";
import "../styles/Project.scss";
import "../styles/slick-theme.css";
import "../styles/slick.css";
import Slider from "react-slick";
import MrGreen from "../components/MrGreen";

function Project() {
  const setting = {
    slide: "div",
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="Project_container">
      <Slider {...setting}>
        <div className="Project">
          <Gunsigi />
        </div>
        <div>
          <MrGreen />
        </div>
      </Slider>
    </div>
  );
}

export default Project;

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <img src="/icons/icon_arrow_up.svg" alt="arrow" />
    </button>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <>
      <button className={className} onClick={onClick}>
        <img src="/icons/icon_arrow_up.svg" alt="arrow" />
      </button>
    </>
  );
}
