import React, { useState, useEffect } from "react";
import "./Calc.css";

const Calculator = () => {
  const [activeTab, setActiveTab] = useState("default");
  const [value, setValue] = useState("");
  const [theme, setTheme] = useState("dark");
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
      setValue(
        Number.isInteger(result)
          ? result.toString()
          : parseFloat(result.toFixed(6)).toString()
      );
    } catch (error) {
      setValue("Error");
    }
  };
  useEffect(() => {
    window.onload = function () {
      theme_change("light");
    };
  }, []);

  const toggleSign = () => {
    if (value) {
      setValue((parseFloat(value) * -1).toString());
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

  function theme_change(value) {
    if (value === "light") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.body.style.boxShadow = "0px 0px 20px rgba(255, 255, 255, 0.5)";
      document.body.style.transition = "all 0.5s ease-in-out";

      let calElement = document.getElementsByClassName("cal")[0];
      if (calElement) {
        calElement.style.color = "blue";
        calElement.style.backgroundColor = "blue";
        calElement.style.borderColor = "white";
      }

      let backelement = document.getElementsByClassName("digits")[0];
      if (backelement) {
        backelement.style.backgroundColor = "rgba(39, 240, 196, 0.81)";
      }

      let keys = document.getElementsByClassName("btn");
      for (let i = 0; i < keys.length; i++) {
        keys[i].style.backgroundColor = "rgb(0, 0, 0)";
        keys[i].style.color = "white";
        keys[i].style.transition = "all 0.5s ease-in-out";
      }

      let keyssymbols = document.getElementsByClassName("btn-sy");
      for (let j = 0; j < keyssymbols.length; j++) {
        keyssymbols[j].style.backgroundColor = "rgb(255, 153, 0)";
        keyssymbols[j].style.color = "black";
        keyssymbols[j].style.transition = "all 0.5s ease-in-out";
      }
      let btnclear = document.getElementsByClassName("btn-clear");
      for (let j = 0; j < btnclear.length; j++) {
        btnclear[j].style.backgroundColor = "rgb(200, 0, 0)";
      }
      let btneq = document.getElementsByClassName("btneq")[0];
      if (btneq) {
        btneq.style.backgroundColor = "green";
      }
      let rootElement = document.querySelector("#root");
      if (rootElement) {
        rootElement.style.backgroundColor = "rgb(100, 201, 38)";
      }
      let heading = document.querySelector("h1");
      if (heading) {
        heading.style.color = "white";
      }
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.body.style.boxShadow = "none";
      document.body.style.transition = "all 0.5s ease-in-out";

      let calElement = document.getElementsByClassName("cal")[0];
      if (calElement) {
        calElement.style.color = "red";
        calElement.style.backgroundColor = "rgb(71, 201, 38)";
        calElement.style.borderColor = "black";
      }

      let backelement = document.getElementsByClassName("digits")[0];
      if (backelement) {
        backelement.style.backgroundColor = "lightblue";
      }

      let keys = document.getElementsByClassName("btn");
      for (let i = 0; i < keys.length; i++) {
        keys[i].style.backgroundColor = "rgb(255, 255, 255)";
        keys[i].style.color = "black";
        keys[i].style.transition = "all 0.5s ease-in-out";
      }

      let keyssymbols = document.getElementsByClassName("btn-sy");
      for (let j = 0; j < keyssymbols.length; j++) {
        keyssymbols[j].style.backgroundColor = "yellow";
        keyssymbols[j].style.color = "black";
        keyssymbols[j].style.transition = "all 0.5s ease-in-out";
      }
      let btnclear = document.getElementsByClassName("btn-clear");
      for (let j = 0; j < btnclear.length; j++) {
        btnclear[j].style.backgroundColor = "rgb(255,100,100)";
      }
      let btneq = document.getElementsByClassName("btneq")[0];
      if (btneq) {
        btneq.style.backgroundColor = "rgb(0, 255, 119)";
      }

      let rootElement = document.querySelector("#root");
      if (rootElement) {
        rootElement.style.backgroundColor = "rgb(243, 158, 54)";
      }
      let heading = document.querySelector("h1");
      if (heading) {
        heading.style.color = "rgb(20, 236, 185)";
      }
    }
  }

  const renderContent = () => {
    switch (activeTab) {
      case "scientic":
        return (
          <div className="scien">
            <div className="col1">
              <button className="btn" onClick={() => setValue(value + "^")}>
                xʸ
              </button>
              <button
                className="btn"
                onClick={() => setValue(`2 ^ (${value})`)}
              >
                2ˣ
              </button>
              <button className="btn" onClick={() => setValue(value + "!")}>
                x!
              </button>
              <button className="btn" onClick={() => setValue("√" + value)}>
                √
              </button>

              <button className="btn" onClick={() => setValue(`|${value}|`)}>
                |x|
              </button>
            </div>
            <div className="col1">
              <button className="btn" onClick={() => setValue(value + "(")}>
                (
              </button>
              <button className="btn" onClick={() => setValue(value + "π")}>
                π
              </button>

              <button className="btn" onClick={() => setValue(value + "sin(")}>
                sin
              </button>
              <button className="btn" onClick={() => setValue(value + "cos(")}>
                cos
              </button>
              <button className="btn" onClick={() => setValue(value + "tan(")}>
                tan
              </button>
            </div>
            <div className="col1">
              <button className="btn" onClick={() => setValue(value + ")")}>
                )
              </button>
              <button className="btn" onClick={toggleSign}>
                +/-
              </button>
              <button className="btn" onClick={() => setValue(value + "log(")}>
                log
              </button>
              <button className="btn" onClick={() => setValue(value + "ln(")}>
                ln
              </button>

              <button className="btn" onClick={() => setValue(value + "e")}>
                e
              </button>
            </div>
          </div>
        );
      default:
        return;
    }
  };
  return (
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

      <div className="input-box">
        <input
          type="text"
          value={value || ""}
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
        className={`col-btn ${activeTab === "scientic" ? "col-active" : ""}`}
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
          <button className="btn-sy" onClick={() => setValue(value + "%")}>
            %
          </button>
          <button className="btn-sy" onClick={() => setValue(value + "*")}>
            ×
          </button>
          <button className="btn-sy" onClick={() => setValue(value + "-")}>
            -
          </button>
          <button className="btn-sy" onClick={() => setValue(value + "+")}>
            +
          </button>
          <button className="btn-sy" onClick={() => setValue(value + "/")}>
            /
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
