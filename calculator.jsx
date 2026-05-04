import { useState } from "react";
import "./App.css";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput("");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Calculator</h2>

        <input value={input} readOnly />

        <div className="buttons">
          {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","+","="].map((btn) => (
            <button
              key={btn}
              onClick={() =>
                btn === "=" ? calculate() : handleClick(btn)
              }
            >
              {btn}
            </button>
          ))}

          <button onClick={clear}>C</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;