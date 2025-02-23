import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./Techniques.css";
import ContactUs from "./ContactUs";
import Techniques from "./Techniques";
import UserInfo from "./UserInfo";
import BlogPage from "./blog";

const App = () => {
  return (
    <div className="farmflow-container">
      {/* <header className="header">
                <div className="logo-container">
                    <img
                        src="https://storage.googleapis.com/a1aa/image/e2XN3HUana_w7cxaKaS-T5-VpM5YsgKTwGgUsWhOijk.jpg"
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
                </nav>
                <button className="login-button">Login</button>
            </header> */}

      {/* Routes Section */}
      <Routes>
        <Route path="/techniques" element={<Techniques />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blog" element={<BlogPage />} />

        {/* Default Home Page */}
        <Route path="/" element={<MainContent />} />
      </Routes>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

// Extracting Main Content to prevent duplicate rendering
const MainContent = () => {
  return (
    <main className="main-section">
      <h1 className="main-title">Rain Water Harvesting Techniques</h1>
      <p className="subtitle">"Discover methods tailored to your needs"</p>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Techniques"
          className="search-input"
        />
        <button className="search-btn">
          <i className="fas fa-search"></i>
        </button>
      </div>
      {/* <div className="filter-options">
                <select className="filter-select">
                    <option>Location</option>
                </select>
                <select className="filter-select">
                    <option>Weather</option>
                </select>
                <select className="filter-select">
                    <option>Farm Area</option>
                </select>
                <button className="submit-btn" style={{ width: "150px", padding: "8px" }}>Submit</button>
            </div> */}

      {/* Recommendations Section */}
      <section className="recommendations-section">
        <h2 className="recommendations-title" style={{ fontSize: "28px" }}>
          Recommendations based on your input
        </h2>
        <div
          className="recommendations-list"
          style={{ display: "flex", gap: "100px", flexWrap: "wrap" }}
        >
          {recommendations.map((item, index) => (
            <div key={index} className="recommendation-item">
              <img
                src={item.image}
                alt={item.title}
                className="recommendation-image"
              />
              <h3 className="recommendation-title">{item.title}</h3>
              <Link to="./blog" className="learn-more">
                Learn More
              </Link>
              <p className="recommendation-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

// Extracting Footer
// const Footer = () => {
//     return (
//         <footer className="footer">
//             <div className="footer-content">
//                 <div>
//                     <h3 className="footer-title">About Us</h3>
//                     <p>Empowering Farmers with Water Solutions</p>
//                 </div>
//                 <div>
//                     <h3 className="footer-title">Quick Links</h3>
//                     <ul>
//                         <li><a href="/">Home</a></li>
//                         <li><a href="/techniques">Techniques</a></li>
//                         <li><a href="/userinfo">User Info</a></li>
//                         <li><a href="/contactus">Contact Us</a></li>
//                     </ul>
//                 </div>
//                 <div>
//                     <h3 className="footer-title">Contact Us</h3>
//                     <p>Email: support@rainwater.com</p>
//                     <p>Phone: +91 5123456789</p>
//                     <p>Address: VIT Bhopal University, Sehore</p>
//                 </div>
//             </div>
//             <div className="social-icons">
//                 <a href="#"><i className="fab fa-facebook"></i></a>
//                 <a href="#"><i className="fab fa-twitter"></i></a>
//                 <a href="#"><i className="fab fa-instagram"></i></a>
//             </div>
//             <p className="footer-note">© 2024 RainWater Solutions. All rights reserved.</p>
//         </footer>
//     );
// };

// Recommendations Data
const recommendations = [
  {
    title: "Contour Bunding",
    image:
      "https://storage.googleapis.com/a1aa/image/LXgNJXH-a5cciUZufzP__iEq4_o4qRjNBft9bNwIwM8.jpg",
    description: "Embankments constructed along the contours of sloping land.",
  },
  {
    title: "Rooftop Rainwater ",
    image:
      "https://storage.googleapis.com/a1aa/image/dbW-kGQuBpvNgu6VIcJM20PvJEk3k0V_K2FegshVkzY.jpg",
    description:
      "Collects rainwater from rooftops and channels it into storage tanks, reservoirs, or recharge pits.",
  },
  {
    title: "Check dams",
    image:
      "https://storage.googleapis.com/a1aa/image/K6NIx94pFyd7eQYr8lJJU-xJVLzttihS7UOpiVWwCEc.jpg",
    description:
      "Small barriers built across streams or drainage channels to capture and store rainwater.",
  },
];

export default App;
