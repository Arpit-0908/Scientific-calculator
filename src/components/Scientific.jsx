import React from "react";

const Scientific = ({ setValue, value }) => {
  const toggleSign = () => {
    if (value) {
      setValue((parseFloat(value) * -1).toString());
    }
  };
  return (
    <div className="scien">
      <div className="col1">
        <button className="btn" onClick={() => setValue(value + "^")}>
          xʸ
        </button>
        <button className="btn" onClick={() => setValue(`2 ^ (${value})`)}>
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
};

export default Scientific;
