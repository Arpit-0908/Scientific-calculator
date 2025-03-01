import React, { useState } from "react";
import "./Calc.css";

const Calculator = () => {
  const [activeTab, setActiveTab] = useState("default");
  const [value, setValue] = useState("");
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
        .replace(/\^/g, "**");

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

  const toggleSign = () => {
    if (value) {
      setValue((parseFloat(value) * -1).toString());
    }
  };
  const renderContent = () => {
    switch (activeTab) {
      case "scientic":
        return (
          <div className="scien">
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
      <div className="input-box">
        <input type="text" value={value} readOnly />
      </div>
      <button
        className="expand-btn"
        style={{
          top: activeTab === "scientic" ? "46.5%" : "46.5%",
          left: activeTab === "scientic" ? "62%" : "57%",
        }}
        onClick={() => setActiveTab("scientic")}
      >
        Expand
      </button>
      <button
        className="col-btn"
        style={{
          top: activeTab === "scientic" ? "39.5%" : "39.5%",
          left: activeTab === "scientic" ? "58.5%" : "53.5%",
        }}
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
