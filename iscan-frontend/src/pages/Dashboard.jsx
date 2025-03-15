import "../styles/Dashboard.css";
import { FaHome, FaBell, FaSearch, FaFileAlt, FaDesktop, FaSignOutAlt, FaDownload } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      

      {/* Main Content */}
      <main className="dashboard-content">
        <h2>Dashboard</h2>
        <div className="cards-container">
          <div className="dashboard-card">Place holder</div>
          <div className="dashboard-card">Place holder</div>
        </div>
        <h3>Last 10 scans</h3>
      </main>
    </div>
  );
};

export default Dashboard;
