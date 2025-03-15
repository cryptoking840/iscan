import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBell, FaSearch, FaFileAlt, FaDesktop, FaSignOutAlt } from "react-icons/fa";
import "../styles/Navbar.css"; // Create a CSS file for styling

const Navbar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">iScan</h2>
      <ul className="nav-links">
        <li><Link to="/dashboard"><FaHome /> Dashboard</Link></li>
        <li><Link to="/scan"><FaSearch /> Scan</Link></li>
        <li><Link to="/reports"><FaFileAlt /> Reports</Link></li>
        <li><Link to="/monitor"><FaDesktop /> Monitor</Link></li>
        <li><Link to="/notifications"><FaBell /> Notifications</Link></li>
        <li><Link to="/logout"><FaSignOutAlt /> Logout</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
