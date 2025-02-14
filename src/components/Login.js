import React from "react";
import "./LoginPage.css"; // Add a CSS file for styling

const LoginPage = () => {
  return (
    <div className="login-container">
      {/* <header className="header">
        <div className="logo-container">
          <img
            src="https://storage.googleapis.com/a1aa/image/1WaeFy3r23IE9E3Hqe_y0wQ9Jqm5s2XjL5Up3ANV2b4.jpg"
            alt="FarmFlow logo"
            className="logo"
          />
          <span className="brand-name">FARMFlow</span>
        </div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Techniques</a>
          <a href="#">User Info</a>
          <a href="#">Contact Us</a>
        </nav>
        <div className="auth-buttons">
          <button className="register-btn">Register</button>
          <button className="login-btn">Login</button>
        </div>
      </header> */}
      <main className="main-content">
        <div className="login-box">
          <img
            src="https://storage.googleapis.com/a1aa/image/ECS1QWdXrYHCCzemgU8vn1D1nN1FyI3bU2FjfvFBb-U.jpg"
            alt="A farmer riding a bicycle carrying crops"
            className="login-image"
          />
          <div className="login-form-container">
            <h2 className="login-title">USER LOGIN</h2>
            <form>
              <div className="input-group">
                <label htmlFor="username">
                  <i className="fas fa-user"></i> Username/Email *
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username/Email *"
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">
                  <i className="fas fa-lock"></i> Password *
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password *"
                />
              </div>
              <button type="submit" className="submit-btn">Login</button>
            </form>
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
              <p>
                Don't have an account? <a href="#">Register</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;