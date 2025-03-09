import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Calculator from "./components/Calculator";
import About from "./components/About";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
