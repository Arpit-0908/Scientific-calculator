import React, { useEffect, useState } from "react";
import "./About.css";
import logo from "/nav.png";
import myImage from "/Photo.png";
import { Link } from "react-router-dom";
import { theme_change } from "./Theme_functions";

const About = () => {
  const setStyle = (element, styles) => {
    for (const [key, value] of Object.entries(styles)) {
      element.style[key] = value;
    }
  };

  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or default to 'light'
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"; // Toggle theme between 'light' and 'dark'
    setTheme(newTheme); // Update the state with the new theme
    localStorage.setItem("theme", newTheme); // Save the new theme to localStorage
    theme_change(newTheme); // Apply the theme to the page

    const isLight = newTheme === "light"; // Check if the theme is light or dark
    document.querySelectorAll(".about-calculator h2").forEach((el) => {
      setStyle(el, {
        color: isLight ? "blue" : "yellow",
        borderColor: isLight ? "red" : "white",
      });
    });

    document.querySelectorAll(".about-calculator p").forEach((el) => {
      setStyle(el, {
        color: isLight ? "black" : "white",
      });
    });

    document.querySelectorAll(".about-calculator strong").forEach((el) => {
      setStyle(el, {
        color: isLight ? "#444" : "#ddd",
      });
    });

    setStyle(document.querySelector(".about-calculator"), {
      backgroundColor: isLight ? "#bbb" : "#555",
    });
    setStyle(document.querySelector(".container"), {
      backgroundColor: isLight ? "rgba(165, 239, 54, 0.76)" : "black",
    });
    setStyle(document.querySelector(".about-me"), {
      backgroundColor: isLight ? "white" : "#eee",
    });
  };

  useEffect(() => {
    // Apply theme on initial render
    theme_change(theme);
  }, [theme]); // Effect will run only when 'theme' changes

  return (
    <div className="container">
      <div className="header">
        <img src={logo} alt="Logo" />
        <h1>Online Calculator</h1>
        <div className="tabs">
          <ul>
            <Link to="/">
              <li className="nav">
                <b>Home</b>
              </li>
            </Link>
            <li className="nav">About</li>
            <li className="nav disabled">Basic Calc</li>
            <li className="nav disabled">Scientific Calc</li>
          </ul>
        </div>
        <button
          className={`theme-button ${
            theme === "dark" ? "active-dark" : "active-light"
          }`}
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <>
              <i className="fa-solid fa-moon"></i>
              <p>Light</p>
            </>
          ) : (
            <>
              <i className="fa-solid fa-sun"></i>
              <p>Dark</p>
            </>
          )}
        </button>
      </div>
      <div className={`about-container ${theme}`}>
        <section className="about-me">
          <div className="image-container">
            <img src={myImage} alt="Arpit Gupta" className="profile-image" />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              "Hi, I'm <strong>Arpit Gupta</strong>, a passionate web developer
              with a keen focus on front-end technologies. I love building
              efficient, responsive applications with modern, clean designs.
              With a strong foundation in <strong>HTML</strong>,{" "}
              <strong>CSS</strong>, and currently enhancing my skills in{" "}
              <strong>JavaScript & React</strong>, I’m excited to create
              seamless user experiences."
            </p>
            <div className="links">
              <a
                href="https://github.com/Arpit-0908"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i> GitHub
              </a>
              <p>|</p>
              <a
                href="https://www.linkedin.com/in/gupta-arpit0908/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>LinkedIn
              </a>
            </div>
          </div>
        </section>
        <section className="about-calculator">
          <h2>About the Scientific Calculator</h2>
          <p>
            This <strong>React-based Scientific Calculator</strong> is a
            powerful tool designed to handle a wide range of mathematical
            operations. From <strong>basic arithmetic</strong> to{" "}
            <strong>advanced scientific functions</strong>, it provides an
            intuitive and efficient way to perform calculations.
          </p>
          <h2>Features</h2>
          <ul>
            <li>➕ Addition, ➖ Subtraction, ✖ Multiplication, ➗ Division</li>
            <li>🧮 Modulus Calculation (%)</li>
            <li>
              📌 Trigonometry: sin(x), cos(x), tan(x) (Supports Degrees &
              Radians)
            </li>
            <li>📊 Logarithms: log(x) (Base 10), ln(x) (Natural Log)</li>
            <li>📈 Exponents & Powers: xⁿ, 2ⁿ, π, e</li>
            <li>✔ Factorial (x!), Square Root (√x), Absolute Value (|x|)</li>
            <li>🔢 Parentheses Support for Complex Expressions</li>
            <li>🌗 Dark Mode </li>
            <li>🎹 Keyboard Input Support</li>
            <li>⚡ Error Handling for Invalid Inputs</li>
          </ul>
        </section>
      </div>
      <div className="footer">
        <p className="footer-text">
          © 2025. All rights reserved | Developer: Arpit Gupta
        </p>
      </div>
    </div>
  );
};

export default About;
