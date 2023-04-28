import React, { useState } from "react";
import "./Game.css";

export const Game = () => {
  const [score, setScore] = useState(0);
  const [boxes, setBoxes] = useState([
    { id: 1, text: "Incorrect" },
    { id: 2, text: "Correct", isCorrect: true },
    { id: 3, text: "Incorrect" },
  ]);

  const handleBoxClick = (boxId) => {
    const selectedBox = boxes.find((box) => box.id === boxId);
    if (selectedBox.isCorrect) {
      setScore(score + 1);
    }
    setBoxes([
      { id: 1, text: "Incorrect" },
      { id: 2, text: "Correct", isCorrect: true },
      { id: 3, text: "Incorrect" },
    ]);
  };

  return (
    <div className="game-container">
      <h2>Of these, which art thou, Shakespearean?</h2>
      <div className="boxes-container">
        {boxes.map((box) => (
          <div
            key={box.id}
            className="box"
            onClick={() => handleBoxClick(box.id)}
          >
            <p>{box.text}</p>
          </div>
        ))}
      </div>
      <div className="score-container">
        <p>Score: {score}</p>
      </div>
    </div>
  );
};
