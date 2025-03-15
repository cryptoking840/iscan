import React, { useState } from "react";
import "../styles/Reports.css";
import { FaDownload } from "react-icons/fa";

const Reports = () => {
  const [dateRange, setDateRange] = useState("");

  return (
    <div className="reports-container">
      
      <main className="reports-content">
        <h2>Reports</h2>

        <div className="date-range-container">
          <label>Select Date Range:</label>
          <input 
            type="date" 
            value={dateRange} 
            onChange={(e) => setDateRange(e.target.value)} 
            className="date-input"
          />
        </div>

        <h3>Scans in the date range</h3>
        <div className="report-download-container">
          <input type="text" placeholder="Scanned reports..." className="report-input" />
          <button className="download-button">
            <FaDownload title="Download Report" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Reports;
