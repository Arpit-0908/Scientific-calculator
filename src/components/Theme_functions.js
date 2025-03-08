export function theme_change(value) {
  if (value === "light") {
    //Currently in dark mode
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.style.boxShadow = "0px 0px 20px rgba(255, 255, 255, 0.5)";
    document.body.style.transition = "all 0.5s ease-in-out";

    let calElement = document.getElementsByClassName("cal")[0];
    if (calElement) {
      calElement.style.color = "blue";
      calElement.style.backgroundColor = "white";
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
      rootElement.style.backgroundColor = "black";
    }
    let heading = document.querySelector("h1");
    if (heading) {
      heading.style.color = "white";
    }
    let left = document.getElementsByClassName("left-area")[0];
    if (left) {
      left.style.backgroundColor = "black";
    }
    let right = document.getElementsByClassName("right-area")[0];
    if (right) {
      right.style.backgroundColor = "black";
    }
    let cal_back = document.getElementsByClassName("display")[0];
    if (cal_back) {
      cal_back.style.backgroundColor = "white";
    }
    let input_area = document.getElementsByClassName("input-area")[0];
    if (input_area) {
      input_area.style.backgroundColor = "black";
      input_area.style.color = "white";
    }
    let content = document.getElementsByClassName("content")[0];
    if (content) {
      content.style.backgroundColor = "#666";
    }
  }
  //Currently in Light mode
  else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.body.style.boxShadow = "none";
    document.body.style.transition = "all 0.5s ease-in-out";

    let calElement = document.getElementsByClassName("cal")[0];
    if (calElement) {
      calElement.style.color = "red";
      calElement.style.backgroundColor = "black";
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
    let left = document.getElementsByClassName("left-area")[0];
    if (left) {
      left.style.backgroundColor = "white";
    }
    let right = document.getElementsByClassName("right-area")[0];
    if (right) {
      right.style.backgroundColor = "white";
    }
    let cal_back = document.getElementsByClassName("display")[0];
    if (cal_back) {
      cal_back.style.backgroundColor = "black";
    }
    let input_area = document.getElementsByClassName("input-area")[0];
    if (input_area) {
      input_area.style.backgroundColor = "white";
    }
    let content = document.getElementsByClassName("content")[0];
    if (content) {
      content.style.backgroundColor = "#333";
    }
  }
}
