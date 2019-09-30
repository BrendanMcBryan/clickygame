import React from "react";
import "./style.css";

function SignCard(props) {
  return (
    <div
      className="card bg-dark text-white"
      onClick={() => props.handleGuess(props.id)}
    >
      <img src={props.image} className="card-img" alt={props.sign} />
      <div className="card-image-overlay">
        <h6 className="card-title">{props.sign}</h6>
        <p className="card-text">{props.picked.toString()}</p>
        <p>id->{props.id}</p>
      </div>
    </div>
  );
}

export default SignCard;
