import React from "react";
import "./LoadingScreen.css";
import Pokeball from "../assets/pokeball.svg";

function LoadingScreen() {
  return (
    <div className="loadingScreen">
      <img
        className="loadingScreen__icon"
        src={Pokeball}
        alt="Pokeball Loading Indicator"
      />
    </div>
  );
}

export default LoadingScreen;
