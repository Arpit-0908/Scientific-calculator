import { useState } from "react";
import "./BMICalculator.css";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");
  const [bmiClass, setBmiClass] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setMessage("Underweight");
        setBmiClass("underweight");
      } else if (bmiValue < 24.9) {
        setMessage("Normal weight");
        setBmiClass("normal");
      } else if (bmiValue < 29.9) {
        setMessage("Overweight");
        setBmiClass("overweight");
      } else {
        setMessage("Obese");
        setBmiClass("obese");
      }

      setShowPopup(true); // Show popup
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setWeight(""); // Reset inputs
    setHeight("");
    setBmi(null);
    setMessage("");
    setBmiClass("");
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

      <button className="bmi-calculate-button" onClick={calculateBMI}>
        Calculate
      </button>

      {/* Popup Modal */}
      {showPopup && (
        <div className="bmi-popup">
          <div className="bmi-popup-content">
            <h3 className={`bmi-value ${bmiClass}`}>Your BMI: {bmi}</h3>
            <p className={`bmi-message ${bmiClass}`}>{message}</p>
            <button className="bmi-close-button" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
