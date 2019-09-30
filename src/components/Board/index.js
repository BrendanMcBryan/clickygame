import React from "react";
import "./style.css";

function Board(props) {
  return (
    <section className="maincontent container">
      <div className="card-columns">{props.children}</div>
    </section>
  );
}

export default Board;
