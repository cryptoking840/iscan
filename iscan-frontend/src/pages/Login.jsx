import "../styles/Login.css";
import logo from "../assets/logo.png"; // Adjust the path if needed

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-section">
          <img src={logo} alt="iScan Logo" className="login-logo" />
        </div>
        <div className="form-section">
          <h2>Login</h2>
          <form>
            <div className="input-group">
              <label htmlFor="username">Login ID</label>
              <input type="text" id="username" placeholder="Enter Login ID" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter Password" />
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
