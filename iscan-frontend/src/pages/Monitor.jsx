import React from "react";
import "../styles/Monitor.css";

const Monitor = () => {
  return (
    <div className="monitor-container">
      
      <main className="monitor-content">
        <h2>Metrics</h2>
        <div className="metrics-grid">
          <div className="metric-box">Metric 1</div>
          <div className="metric-box">Metric 2</div>
          <div className="metric-box">Metric 3</div>
          <div className="metric-box">Metric 4</div>
        </div>
      </main>
    </div>
  );
};

export default Monitor;
