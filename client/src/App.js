import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { Game } from "./Game";

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [showGame, setShowGame] = useState(false);

  const toggleForm = (formName) => {
    if (formName === 'guest') {
      setShowGame(true);
    } else {
      setCurrentForm(formName);
    }
  }

  return (
    <div className="App">
      {showGame ? (
        <Game />
      ) : (
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
