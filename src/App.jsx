import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Calculator from "./components/Calculator";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
