import React from "react";
import "./style.css";

function SignCard(props) {
  return (
    <div
      className="card bg-dark text-white"
      onClick={() => props.handleGuess(props.id)}
    >
      <img src={props.image} class="card-img" alt={props.sign} />
      <div className="card-image-overlay">
        <h5 className="card-title">{props.sign}</h5>
      </div>
    </div>
  );
}

export default SignCard;
