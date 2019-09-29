import React from "react";
import "./style.css";

function Title(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        React Remember
      </a>
      <h4 className="message">{props.message}
      </h4>
      <div className="my-2 my-lg-0">
        Score: {props.score} | Top Score: {props.topScore}
      </div>
    </nav>
  );
}

export default Title;
