import { useState } from "react";
import "./BMICalculator.css";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      if (bmiValue < 18.5) setMessage("Underweight");
      else if (bmiValue < 24.9) setMessage("Normal weight");
      else if (bmiValue < 29.9) setMessage("Overweight");
      else setMessage("Obese");
    }
  };

  return (
    <div className="bmi-calculator-wrapper">
      <h2 className="bmi-calculator-title">BMI Calculator</h2>
      <input
        className="bmi-input-weight"
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        className="bmi-input-height"
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button className="bmi-calculate-button" onClick={calculateBMI}>
        Calculate
      </button>
      {bmi && (
        <div className="bmi-result">
          <h3 className="bmi-value">Your BMI: {bmi}</h3>
          <p className="bmi-message">{message}</p>
        </div>
      )}
    </div>
  );
}
