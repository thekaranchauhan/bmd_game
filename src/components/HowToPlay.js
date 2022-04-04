import React from "react";
import reactDom from "react-dom";
import "./HowToPlay.css";
import Game from "./Game";
import { useNavigate } from "react-router-dom";

const HowToPlay = () => {
  const navigate = useNavigate();
  const renderNewComponent = () => {
    navigate("/game");
  };
  return (
    <div className="play">
      <h2>How to play ?</h2>
      <div className="rules">
        <p>
          The game consists of 10 cards; you must make all five matches to win
          the game.
        </p>
        <p>
          The objective of the game is to match the fimages with the similar
          one.
        </p>
        <p>You will have 20 seconds to make all 5 matches.</p>
      </div>
      <button className="play-button" onClick={renderNewComponent}>
        Play Now
      </button>
    </div>
  );
};

export default HowToPlay;
