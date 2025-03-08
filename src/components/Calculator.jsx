import React, { useState, useEffect } from "react";
import "./Calc.css";
import { theme_change } from "./Theme_functions";
import Scientific from "./Scientific";
import logo from "/nav.png";
import TrignoValues from "./Trigno-values";
const Calculator = () => {
  const [activeTab, setActiveTab] = useState("default");
  const [value, setValue] = useState("");
  const [theme, setTheme] = useState("dark");
  const [history, setHistory] = useState(["No History Available"]);

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
      setHistory([...history, `${value} = ${formattedResult}`]);
    } catch (error) {
      setValue("Error");
    }
  };
  useEffect(() => {
    window.onload = function () {
      theme_change("light");
    };
  }, []);

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
            <li className="nav ">About</li>
            <li className="nav"  onClick={() => setActiveTab("default")}>Basic Calc</li>
            <li className="nav" onClick={() => setActiveTab("scientic")}>Scientific Calc</li>
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
          <div className="display">
           
            <h1 className="displayh1">Calculator</h1>
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
                <button className="btn" onClick={() => setValue(value + "00")}>
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
        </div>
        <div className="right-area">
        <div className="trigno-fxn">
            <TrignoValues />
          </div>
          <div className="history">
            <h3>History</h3>
            <ul>
              {history.map((entry, index) => (
                <li key={index}>{entry}</li>
              ))}
            </ul>
            <button onClick={() => setHistory([])}>Clear History</button>
          </div>
          
        </div>
      </div>
      <div className="footer">
        <p className="footer-text">
          © 2025. All rights reserved | Developer: Arpit Gupta
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <i className="fa-brands fa-github"></i> GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
