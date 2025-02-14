import React from "react";
import "./RegisterPage.css"; // Add a CSS file for styling
// import { BrowserRouter as Router, Route, Routes, Link,useNavigate} from "react-router-dom";
// import Login from "./Login";


const RegisterPage = () => {
  // const navigate = useNavigate(); // Hook for navigation
  return (
    <div className="register-container">
      {/* <header className="header">
        <div className="logo-container">
          <img
            src="https://storage.googleapis.com/a1aa/image/K-tq74mxEVWirJpeco0y8LPmKFGGi3xYEd5ZzPDomNk.jpg"
            alt="FARMFlow logo"
            className="logo"
          />
          <span className="brand-name">FARMFlow</span>
        </div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Techniques</a>
          <a href="#">User Info</a>
          <a href="#">Contact Us</a>
          <a href="#" className="register-link">Register</a>
          <a href="#" className="login-link">Login</a>
        </nav>
      </header> */}
      <main className="main-content">
      {/* <Route path="/login" element={<Login />} /> */}

        <div className="register-box">
          <h2 className="register-title">REGISTER</h2>
          <form>
            <div className="input-group">
              <label>First name</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label>Last name</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="email" />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" />
            </div>
            <div className="input-group">
              <label>Confirm Password</label>
              <input type="password" />
            </div>
            <div className="input-group">
              <label>Phone</label>
              <input type="tel" />
            </div>
            <div className="submit-container">
              <button type="submit" className="submit-btn">Register</button>
            </div>
          </form>
          <p className="login-text">
            {/* Already have an account? <button className="login-button" onClick={() => navigate("/login")}>Login</button> */}
          </p>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
