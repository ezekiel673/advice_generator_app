// App.jsx
import { useState, useEffect } from "react";
import "./index.css";
import diceIcon from "/images/icon-dice.svg";
import patternDivider from "/images/pattern-divider-desktop.svg"

export default function App() {
  const [advice, setAdvice] = useState("Loading advice...");
  const [adviceId, setAdviceId] = useState(null);

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
    } catch {
      setAdvice("Failed to load advice. Try again!");
      setAdviceId(null);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="container">
      <div className="card">
        {adviceId && <h4 className="advice-id">ADVICE #{adviceId}</h4>}
        <h1 className="advice-text">"{advice}"</h1>
        <img src={patternDivider} alt="Divider"  />
        <button className="dice-button" onClick={fetchAdvice}>
          <img src={diceIcon} alt="Dice" />
        </button>
      </div>
    </div>
  );
}
