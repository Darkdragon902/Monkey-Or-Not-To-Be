import React, { useState, useEffect } from "react";
import "./Game.css";

export const Game = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [boxes, setBoxes] = useState([
    { id: 1, text: "To be or not to be, that is the question.", isCorrect: false },
    { id: 2, text: "All the world's a stage, and all the men and women merely players.", isCorrect: true },
    { id: 3, text: "There are more things in heaven and earth, Horatio, than are dreamt of in your philosophy.", isCorrect: false },
  ]);

  useEffect(() => {
    setBoxes((prevBoxes) => prevBoxes.sort(() => Math.random() - 0.5));
  }, [score]);

const handleBoxClick = (boxId) => {
  const selectedBox = boxes.find((box) => box.id === boxId);
  if (selectedBox.isCorrect) {
    setScore((prevScore) => prevScore + 1);
    const newBoxes = boxes.map((box) => ({
      ...box,
      isCorrect: box.id === boxId ? true : false,
      isFlash: box.id === boxId ? true : false, // Add a new property to the selected box to enable flashing effect
    }));
    setBoxes(newBoxes);
    setTimeout(() => { // Remove the "flash" class after 500 milliseconds
      const updatedBoxes = newBoxes.map((box) => ({
        ...box,
        isFlash: false,
      }));
      setBoxes(updatedBoxes);
    }, 500);
  } else {
    setScore(0);
  }
};


  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  return (
    <div className="game-container">
      <h2>Of these, which art thou, Shakespearean?</h2>
      <div className="boxes-container">
        {boxes.map((box) => (
          <div
            key={box.id}
            className={`box ${box.isCorrect ? "correct" : ""}`}
            onClick={() => handleBoxClick(box.id)}
          >
            <p>{box.text}</p>
          </div>
        ))}
      </div>
      <div className="score-container">
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
    </div>
  );
};
