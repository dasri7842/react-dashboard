import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const TempData = {
  Type: "column",
  Name: "Temperature",
  Units: "°C",
  Data: [16, 22.2, 26.4, 30.4, 35.4, 36.0, 28.6, 28.5, 26.4, 22.1, 19.6, 15.4],
};

const RainData = {
  Type: "column",
  Name: "Rainfall",
  Units: "mm",
  Data: [
    149.9,
    71.5,
    106.4,
    129.2,
    144,
    176,
    135.6,
    148.5,
    216.4,
    194,
    95.6,
    154.4,
  ],
};
ReactDOM.render(
  <React.StrictMode>
    <App TempData={TempData} RainData={RainData} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
