import { useState } from "react";
import "./Popup.css";

export default function BMIPopup({ children }) {
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");
  const [bmiClass, setBmiClass] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const calculateBMI = (weight, height) => {
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

    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setBmi(null);
    setMessage("");
    setBmiClass("");
  };

  return (
    <>
      {children(calculateBMI, closePopup)}

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
    </>
  );
}
