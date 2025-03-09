import React, { useState, useEffect } from "react";
import "./Calc.css";
import { theme_change } from "./Theme_functions";
import Scientific from "./Scientific";
import logo from "/nav.png";
import TrignoValues from "./Trigno-values";
import BMICalculator from "./BMI";

import { useTheme } from "../ThemeContext";
import { Link } from "react-router-dom";
import BMIPopup from "./BMIPopup";

const Calculator = () => {
  const [activeTab, setActiveTab] = useState("default");
  const [value, setValue] = useState("");
  const { theme, setTheme } = useTheme();
  const [history, setHistory] = useState(["No History Available"]);

  const clearHistory = () => {
    setHistory(["No History Available"]);
  };

  useEffect(() => {
    theme_change(theme);
  }, []);
  const calculateResult = () => {
    try {
      let expression = value
        .replace(/π/g, Math.PI)
        .replace(/e/g, Math.E)
        .replace(/sin\(/g, "Math.sin(")
        .replace(/cos\(/g, "Math.cos(")
        .replace(/tan\(/g, "Math.tan(")
        .replace(/log\(/g, "Math.log10(")
        .replace(/ln\(/g, "Math.log(")
        .replace(/(\d+)!/g, (match, num) => factorial(parseInt(num)))
        .replace(/√(\d+(\.\d+)?)/g, (match, num) => `Math.sqrt(${num})`)
        .replace(/\|(-?\d+(\.\d+)?)\|/g, (match, num) => `Math.abs(${num})`)
        .replace(
          /2\s*\^\s*\(([^)]+)\)/g,
          (match, exponent) => `Math.pow(2, ${exponent})`
        )
        .replace(
          /(\d+)\s*\^\s*(\d+)/g,
          (match, base, exponent) => `Math.pow(${base}, ${exponent})`
        );

      let result = eval(expression);
      const formattedResult = Number.isInteger(result)
        ? result.toString()
        : parseFloat(result.toFixed(6)).toString();

      setValue(formattedResult);
      setHistory((prevHistory) =>
        prevHistory[0] === "No History Available"
          ? [`${value} = ${formattedResult}`]
          : [...prevHistory, `${value} = ${formattedResult}`]
      );
    } catch (error) {
      setValue("Error");
    }
  };

  const handleKeyPress = (event) => {
    const key = event.key;

    if (/[0-9]/.test(key)) {
      setValue(value + key);
    } else if (key === "Enter") {
      calculateResult();
    } else if (key === "Backspace") {
      setValue(value.slice(0, -1));
    } else if (["+", "-", "*", "/", "^"].includes(key)) {
      setValue(value + key);
    } else if (key === "Escape") {
      setValue("");
    }
  };

  const factorial = (value) => {
    let ans = 1;
    if (value < 0) {
      return "Error";
    }
    if (value == 0) {
      return 0;
    } else {
      for (let index = 1; index <= value; index++) {
        ans = ans * index;
      }
      return ans;
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [value]);

  const renderContent = () => {
    switch (activeTab) {
      case "scientic":
        return <Scientific setValue={setValue} value={value} />;
      default:
        return;
    }
  };
  return (
    <div className="container">
      <div className="header">
        <img src={logo}></img>
        <h1>Online Calculator</h1>
        <div className="tabs">
          <ul>
            <li className="nav">Home</li>
            <Link to="/About">
              <li className="nav ">
                <b>About</b>
              </li>
            </Link>
            <li
              className={`nav ${activeTab === "default" ? "disabled" : ""}`}
              onClick={() => setActiveTab("default")}
            >
              Basic Calc
            </li>
            <li
              className={`nav ${activeTab === "scientic" ? "disabled" : ""}`}
              onClick={() => setActiveTab("scientic")}
            >
              Scientific Calc
            </li>
          </ul>
        </div>
      </div>
      <div className="cal">
        <button
          className={`theme-button ${
            theme === "dark" ? "dark-mode" : "light-mode"
          }`}
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
            theme_change(theme);
          }}
        >
          {theme === "dark" ? (
            <>
              <i className="fa-solid fa-sun"></i>
              <p>Dark</p>
            </>
          ) : (
            <>
              <i className="fa-solid fa-moon"></i>
              <p>Light</p>
            </>
          )}
        </button>
        <div className="left-area">
          <div className="content">
            <h2>Scientific Calculator</h2>
            <p>
              This is an advanced online JavaScript-based scientific calculator.
              It allows you to perform complex mathematical operations
              seamlessly. You can either click the buttons or type directly,
              just like using a physical calculator. It supports trigonometric
              functions, logarithms, exponentiation, and more for precise
              calculations.
            </p>
          </div>
          <div className="main-section">
            <div className="display">
              <div className="headin">
                <h1 className="displayh1">Calculator</h1>
              </div>
              <div className="input-box">
                <input
                  type="text"
                  value={value || ""}
                  className="input-area"
                  readOnly
                  placeholder="Perform Operations..."
                />
              </div>
              <button
                className={`expand-btn ${
                  activeTab === "scientic" ? "expand-active" : ""
                }`}
                onClick={() => setActiveTab("scientic")}
              >
                Expand
              </button>
              <button
                className={`col-btn ${
                  activeTab === "scientic" ? "col-active" : ""
                }`}
                onClick={() => setActiveTab("default")}
              >
                Collapse
              </button>
              <div className="digits">
                <div className="col1">{renderContent()}</div>
                <div className="col1">
                  <button
                    className="btn-clear"
                    onClick={() => setValue(value.slice(0, -1))}
                  >
                    Del
                  </button>
                  <button className="btn" onClick={() => setValue(value + "7")}>
                    7
                  </button>
                  <button className="btn" onClick={() => setValue(value + "4")}>
                    4
                  </button>
                  <button className="btn" onClick={() => setValue(value + "1")}>
                    1
                  </button>
                  <button
                    className="btn"
                    onClick={() => setValue(value + "00")}
                  >
                    00
                  </button>
                </div>
                <div className="col2">
                  <button className="btn-clear" onClick={() => setValue("")}>
                    AC
                  </button>
                  <button className="btn" onClick={() => setValue(value + "8")}>
                    8
                  </button>
                  <button className="btn" onClick={() => setValue(value + "5")}>
                    5
                  </button>
                  <button className="btn" onClick={() => setValue(value + "2")}>
                    2
                  </button>
                  <button className="btn" onClick={() => setValue(value + "0")}>
                    0
                  </button>
                </div>
                <div className="col3">
                  <button className="btn" onClick={() => setValue(value + ".")}>
                    .
                  </button>
                  <button className="btn" onClick={() => setValue(value + "9")}>
                    9
                  </button>
                  <button className="btn" onClick={() => setValue(value + "6")}>
                    6
                  </button>
                  <button className="btn" onClick={() => setValue(value + "3")}>
                    3
                  </button>
                  <button className="btneq" onClick={calculateResult}>
                    =
                  </button>
                </div>
                <div className="col4">
                  <button
                    className="btn-sy"
                    onClick={() => setValue(value + "%")}
                  >
                    %
                  </button>
                  <button
                    className="btn-sy"
                    onClick={() => setValue(value + "*")}
                  >
                    ×
                  </button>
                  <button
                    className="btn-sy"
                    onClick={() => setValue(value + "-")}
                  >
                    -
                  </button>
                  <button
                    className="btn-sy"
                    onClick={() => setValue(value + "+")}
                  >
                    +
                  </button>
                  <button
                    className="btn-sy"
                    onClick={() => setValue(value + "/")}
                  >
                    /
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`history ${
                activeTab === "scientic" ? "history-active" : ""
              }`}
            >
              <div className="history-title">
                <h3>History</h3>
              </div>
              <div className="history-list">
                <ul>
                  {history.map((entry, index) => (
                    <li key={index}>{entry}</li>
                  ))}
                </ul>
              </div>
              <div className="history-button">
                <button onClick={clearHistory}>Clear History</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right-area">
          <div className="trigno-fxn">
            <TrignoValues />
          </div>
          <div className="BMI">
            <BMIPopup>
              {(onCalculate, onReset) => (
                <BMICalculator onCalculate={onCalculate} onReset={onReset} />
              )}
            </BMIPopup>
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="footer-text">
          © 2025. All rights reserved | Developer: Arpit Gupta
        </p>
      </div>
    </div>
  );
};

export default Calculator;
