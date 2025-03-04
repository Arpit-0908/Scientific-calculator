import { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Scientific Calculator</h1>
      <Calculator/>
    </>
  );
}

export default App;
