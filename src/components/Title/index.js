import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="titleNav">
      <nav className="navbar sticky-top navbar-expand-lg ">
        <div className="row d-flex flex-row justify-content-between">
          <div className="col-5 brand-col">
            {/* <a className="navbar-brand" href="/"> */}
            <h1>React Remember</h1>
            {/* </a> */}
          </div>
          <div className="col-4 message-col">
            <h2>{props.message}</h2>
          </div>
          <div className="col-3 score-col">
            <h3>
              Score<span className="scorespan"> {props.score}</span> |{" "}
              <span className="scorespan">{props.topScore}</span> High </h3>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Title;
