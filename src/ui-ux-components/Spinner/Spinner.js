import React from "react";
import "./Spinner.css";

export default function Spinner() {
  return (
    <div className="loader-backdrop">
    <div className="spinner-container">
      <div className="loading-spinner">
      </div>
    </div>
    </div>
  );
}