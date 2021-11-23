import React from "react";
import { Link } from "react-router-dom";
import "../styles/Index.scss";

function Index() {
  return (
    <div className="Index_container">
      <div className="Index">
        <Link to="/introduce" className="Index_list">
          <div className="number_container">
            <span className="number">01</span>
            <span className="line" />
          </div>
          <div className="text_container">
            <div className="main_text">Introduce</div>
          </div>
        </Link>

        <Link to="/stack" className="Index_list">
          <div className="number_container">
            <span className="number">02</span>
            <span className="line" />
          </div>
          <div className="text_container">
            <div className="main_text">Stack</div>
          </div>
        </Link>

        <Link to="/education_or_career" className="Index_list">
          <div className="number_container">
            <span className="number">03</span>
            <span className="line" />
          </div>
          <div className="text_container">
            <div className="main_text">Education & Career</div>
          </div>
        </Link>

        <Link to="/2week_project" className="Index_list">
          <div className="number_container">
            <span className="number">04</span>
            <span className="line" />
          </div>
          <div className="text_container">
            <div className="main_text">2Week-Project</div>
          </div>
        </Link>

        <Link to="/4week_project" className="Index_list">
          <div className="number_container">
            <span className="number">05</span>
            <span className="line" />
          </div>
          <div className="text_container">
            <div className="main_text">4Week-Project</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Index;
