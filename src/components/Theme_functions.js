export function theme_change(value) {
  const isLight = value === "dark";

  // Save the theme in localStorage
  localStorage.setItem("theme", value); // Store the theme in localStorage

  document.body.style.backgroundColor = isLight ? "black" : "white";
  document.body.style.color = isLight ? "white" : "black";
  document.body.style.boxShadow = isLight
    ? "0px 0px 20px rgba(255, 255, 255, 0.5)"
    : "none";
  document.body.style.transition = "all 0.5s ease-in-out";

  const setStyle = (element, styles) => {
    if (element) Object.assign(element.style, styles);
  };

  setStyle(document.querySelector(".cal"), {
    color: isLight ? "blue" : "red",
    backgroundColor: isLight ? "white" : "black",
    borderColor: isLight ? "white" : "black",
  });

  setStyle(document.querySelector(".digits"), {
    backgroundColor: isLight ? "rgba(39, 240, 196, 0.81)" : "lightblue",
  });

  document.querySelectorAll(".btn").forEach((el) =>
    setStyle(el, {
      backgroundColor: isLight ? "black" : "white",
      color: isLight ? "white" : "black",
      transition: "all 0.5s ease-in-out",
    })
  );

  document.querySelectorAll(".btn-sy").forEach((el) =>
    setStyle(el, {
      backgroundColor: isLight ? "rgb(255, 153, 0)" : "yellow",
      color: "black",
      transition: "all 0.5s ease-in-out",
    })
  );

  document.querySelectorAll(".btn-clear").forEach((el) =>
    setStyle(el, {
      backgroundColor: isLight ? "rgb(200, 0, 0)" : "rgb(255,100,100)",
    })
  );

  setStyle(document.querySelector(".btneq"), {
    backgroundColor: isLight ? "green" : "rgb(0, 255, 119)",
  });

  setStyle(document.querySelector("#root"), {
    backgroundColor: isLight ? "black" : "rgb(165, 239, 54)",
  });

  setStyle(document.querySelector("h1"), {
    color: isLight ? "white" : "rgb(20, 236, 185)",
  });

  setStyle(document.querySelector(".left-area"), {
    backgroundColor: isLight ? "black" : "white",
  });
  setStyle(document.querySelector(".right-area"), {
    backgroundColor: isLight ? "black" : "white",
  });
  setStyle(document.querySelector(".display"), {
    backgroundColor: isLight ? "white" : "black",
  });

  setStyle(document.querySelector(".input-area"), {
    backgroundColor: isLight ? "black" : "white",
    color: isLight ? "white" : "black",
  });

  setStyle(document.querySelector(".content"), {
    backgroundColor: isLight ? "#666" : "#333",
  });

  [".expand-btn", ".col-btn", ".expand-active", ".col-active"].forEach((cls) =>
    setStyle(document.querySelector(cls), {
      backgroundColor: isLight ? "white" : "black",
      color: isLight ? "black" : "white",
    })
  );

  setStyle(document.querySelector(".displayh1"), {
    color: isLight ? "blue" : "yellowgreen",
  });

  document
    .querySelectorAll(".nav")
    .forEach((el) => setStyle(el, { color: isLight ? "#FFEB99" : "white" }));

  setStyle(document.querySelector(".header"), {
    backgroundColor: isLight ? "#003366" : "#00509E",
  });
  setStyle(document.querySelector(".trig-info"), {
    color: isLight ? "red" : "blue",
  });
  [".history", ".history-active"].forEach((cls) =>
    setStyle(document.querySelector(cls), {
      backgroundColor: isLight ? "white" : "#ccc",
    })
  );
}
