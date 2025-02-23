import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./FarmFlow.css"; // Importing custom CSS file
import Techniques from "./components/Techniques";
import UserInfo from "./components/UserInfo";
import Login from "./components/Login";
import Register from "./components/Register";
const Header = () => {
  const navigate = useNavigate(); // Hook for navigation

  const scrollToFooter = (e) => {
    e.preventDefault();
    document.querySelector(".footer").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="https://storage.googleapis.com/a1aa/image/e2XN3HUana_w7cxaKaS-T5-VpM5YsgKTwGgUsWhOijk.jpg"
          alt="FarmFlow logo"
          className="logo"
        />
        <span className="brand-name">FARMFlow</span>
      </div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/techniques">Techniques</a>
        <a href="/userinfo">User Info</a>
        <a href="#footer" onClick={scrollToFooter}>
          Contact Us
        </a>
      </nav>
      <div className="btn">
        <button className="login-button" onClick={() => navigate("/login")}>
          Login
        </button>
        <button
          className="login-button register"
          onClick={() => navigate("/register")}
          style={{ marginRight: "10px" }}
        >
          Register
        </button>
      </div>
    </header>
  );
};

const App = () => {
  return (
    <Router>
      <div className="farmflow-container">
        {/* <header className="header">
          <div className="logo-container">
            <img
              src="https://storage.googleapis.com/a1aa/image/e2XN3HUana_w7cxaKaS-T5-VpM5YsgKTwGgUsWhOijk.jpg"
              // src="./farm.mp4"
              alt="FarmFlow logo"
              className="logo"
            />
            <span className="brand-name">FARMFlow</span>
          </div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/techniques">Techniques</Link>
            <Link to="/userinfo">User Info</Link>
            <Link to="/contactus">Contact Us</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </nav>
          <div className="btn">
          <button className="login-button">Login</button>
          <button className="login-button register">Register</button>
          </div>
        </header> */}
        <Header />
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/"
              element={
                <>
                  <section className="hero-section">
                    <div className="heroImage">
                      <img
                        src={`${process.env.PUBLIC_URL}/tractor on field.jpg`}
                        alt="Tractor in a field"
                        className="hero-image"
                      />
                    </div>
                    <div
                      className="hero-content"
                      style={{
                        textAlign: "center",
                        position: "absolute",
                        right: "50px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      }}
                    >
                      <h1>Smart Water Solutions for Smarter Farming</h1>
                      <p>
                        Find the most effective rainwater harvesting technique
                        tailored to your needs.
                      </p>
                      <div className="button-group">
                        <button
                          className="primary-button"
                          style={{
                            backgroundColor: "green",
                            borderRadius: "20px",
                            padding: "10px 20px",
                          }}
                        >
                          Get Started
                        </button>
                        <button
                          className="secondary-button"
                          style={{
                            backgroundColor: "green",
                            borderRadius: "20px",
                            padding: "10px 20px",
                          }}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </section>

                  <section className="features-section">
                    <div className="feature-box">
                      <h2>Chatbot Assistance</h2>
                      <br/>
                      <p>
                      💬
                      </p>
                      <br/>
                      <p>
                        Instantly get answers to your queries with our
                        AI-powered chatbot.
                      </p>
                    </div>

                    <div className="feature-box">
                      <h2>Recommended Techniques</h2>
                      <br/>
                      <p>
                      🔍
                      </p>
                      <br/>
                      <p>
                         Get expert-backed farming techniques suited for your
                        needs.
                      </p>
                    </div>

                    <div className="feature-box">
                      <h2>Deep Learning Hub </h2>
                    
                      <br/>
                      <p>
                      📚
                      </p>
                      <br/>
                      <p>
                        Explore and understand each technique in detail for
                        better decision-making.
                      </p>
                    </div>
                  </section>

                  <section className="why-rainwater-section">
                    <div className="Why-rainwater-Image">
                      <img
                        alt="Rainwater harvesting"
                        src="https://storage.googleapis.com/a1aa/image/WDZPwoSR8S0R1rAddPHvbnMI2p1w79macaVUmZX_7dM.jpg"
                        width="1200"
                        height="400"
                      />
                    </div>
                    <div className="why-rainwater-content">
                      <h2>Why Rainwater Harvesting Matters</h2>
                      <ul>
                        <li>
                          <i className="fas fa-check"></i> Saves water for
                          drought-prone seasons.
                        </li>
                        <li>
                          <i className="fas fa-check"></i> Reduces dependency on
                          groundwater.
                        </li>
                        <li>
                          <i className="fas fa-check"></i> Enhances crop yield
                          and soil health.
                        </li>
                      </ul>
                    </div>
                  </section>
                </>
              }
            />
            <Route path="/techniques" element={<Techniques />} />
            <Route path="/userinfo" element={<UserInfo />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-container">
            <div>
              <h3>About Us</h3>
              <p>Empowering Farmers with Water Solutions</p>
            </div>
            <div>
              <h3>Quick Links</h3>
              <ul>
                <p>
                  <Link to="/">Home</Link>
                </p>
                <p>
                  <Link to="/techniques">Techniques</Link>
                </p>
                <p>
                  <Link to="/userinfo">User Info</Link>
                </p>
                <p>
                  <Link to="/contactus">Contact Us</Link>
                </p>
              </ul>
            </div>
            <div>
              <h3>Contact Info</h3>
              <ul>
                <p>Email: support@farmflow.com</p>
                <p>Phone: +91 1234567890</p>
                <p>Address: VIT Bhopal University, Sehore</p>
              </ul>
            </div>
          </div>
          <div className="social-icons">
            <p>Follow Us:</p>
            <div>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="copyright">
            <p>© 2025 RainWater Solutions. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
