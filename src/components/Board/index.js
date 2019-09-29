import React from "react";
import "./style.css";

function Board(props) {
  return <div className="card-columns">{props.children}</div>;
}

export default Board;
