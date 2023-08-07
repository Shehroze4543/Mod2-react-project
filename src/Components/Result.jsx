import React from "react";

function Result(props) {
  return (
    <div className="game-over">
      <p>
        <strong>
          Oops, that wasn't the correct answer. Though you didn't win the grand
          prize, you still walk away with
          <h1>${props.amount}</h1> Congratulations on your earnings today!"
        </strong>
      </p>
    </div>
  );
}

export default Result;
