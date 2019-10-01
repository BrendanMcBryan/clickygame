import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="titleNav">
      <nav className="navbar sticky-top navbar-expand-lg ">
        <div className="row d-flex flex-row justify-content-between">
          <div className="col-3">
            {/* <a className="navbar-brand" href="/"> */}
              React Remember
            {/* </a> */}
          </div>
          <div className="col-3 message">
            {props.message}
          </div>
          <div className="col-3 score">
            Score: {props.score} | Top Score: {props.topScore}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Title;
