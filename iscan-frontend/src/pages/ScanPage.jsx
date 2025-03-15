import "../styles/ScanPage.css";
import { FaSearch } from "react-icons/fa";

const ScanPage = () => {
  return (
    <div className="scan-container">
      
      {/* Main Content */}
      <main className="scan-content">
        <h2>Start Scan</h2>
        <div className="scan-input-container">
          <input type="text" placeholder="Enter image name" className="scan-input" />
          <button className="scan-button"><FaSearch /></button>
        </div>

        <h3>Summary</h3>
      </main>
    </div>
  );
};

export default ScanPage;
