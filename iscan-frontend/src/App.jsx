import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ScanPage from "./pages/ScanPage";
import Reports from "./pages/Reports";
import Monitor from "./pages/Monitor";
import "./styles/App.css";

const App = () => {
  const location = useLocation();

  return (
    <div className="app-container">
      {location.pathname !== "/" && <Navbar />}
      <div className={location.pathname !== "/" ? "content" : ""}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scan" element={<ScanPage />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/monitor" element={<Monitor />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
