import { useState } from "react";
import "./BMICalculator.css";

export default function BMICalculator({ onCalculate, onReset }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const handleCalculate = () => {
    if (weight && height) {
      onCalculate(weight, height);
    }
  };

  return (
    <div className="bmi-calculator-wrapper">
      <h2 className="bmi-calculator-title">BMI Calculator</h2>

      <input
        className="bmi-input"
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        className="bmi-input"
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <div className="bmi-button">
        <button className="bmi-calculate-button" onClick={handleCalculate}>
          Calculate
        </button>

        <button
          className="bmi-calculate-button"
          onClick={() => {
            setWeight("");
            setHeight("");
            onReset();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
