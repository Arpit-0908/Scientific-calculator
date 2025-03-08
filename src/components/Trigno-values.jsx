import { useState } from "react";
import "./trigno.css";
import { theme_change } from "./Theme_functions";

export default function TrignoValues() {
  const [selectedFunction, setSelectedFunction] = useState("sin");

  const trigFunctions = {
    sin: {
      name: "Sine (sin θ)",
      values: [
        "sin(0°) = 0",
        "sin(30°) = 1/2",
        "sin(45°) = √2/2",
        "sin(60°) = √3/2",
        "sin(90°) = 1",
      ],
    },
    cos: {
      name: "Cosine (cos θ)",
      values: [
        "cos(0°) = 1",
        "cos(30°) = √3/2",
        "cos(45°) = √2/2",
        "cos(60°) = 1/2",
        "cos(90°) = 0",
      ],
    },
    tan: {
      name: "Tangent (tan θ)",
      values: [
        "tan(0°) = 0",
        "tan(30°) = 1/√3",
        "tan(45°) = 1",
        "tan(60°) = √3",
        "tan(90°) = Undefined",
      ],
    },
  };

  return (
    <div className="trig-container">
      <h2>Trigonometric Functions</h2>
      <div className="button-group">
        <button onClick={() => setSelectedFunction("sin")}>Sine</button>
        <button onClick={() => setSelectedFunction("cos")}>Cosine</button>
        <button onClick={() => setSelectedFunction("tan")}>Tangent</button>
      </div>
      <div className="trig-info">
        <h3>{trigFunctions[selectedFunction].name}</h3>
        <ul>
          {trigFunctions[selectedFunction].values.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { TrignoValues };
