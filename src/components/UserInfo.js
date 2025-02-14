import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./UserInfo.css";
import ContactUs from "./ContactUs";
import Techniques from "./Techniques";
import UserInfo from "./UserInfo";

const techniques = [
    {
        title: "Tanks",
        image: "https://storage.googleapis.com/a1aa/image/aBOUKGa7rAuhVC0_LxltGfJq6dHWB6qDMnMpRhTV_d4.jpg",
        description: "Tools to store collected rain water, reduces water wastage."
    },
    {
        title: "Check Dams",
        image: "https://storage.googleapis.com/a1aa/image/QEp2AWOKeIQfKkRaBRXK2c20g0h1IPJ7h1063m9lHUY.jpg",
        description: "Small barriers that slow down water flow, increasing groundwater recharge."
    },
    {
        title: "Percolation Pits",
        image: "https://storage.googleapis.com/a1aa/image/dc3AFKuUixNKI0iIZgktWRC9ia8mjvzS_WUfQ0SoL_c.jpg",
        description: "Small pits that allow rain water to percolate into the ground, increasing groundwater levels."
    }
];

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

            {/* Routes */}
            <Routes>
                <Route path="/techniques" element={<Techniques />} />
                <Route path="/userinfo" element={<UserInfo />} />
                <Route path="/contactus" element={<ContactUs />} />
            </Routes>

            {/* User Info Section */}
            <main className="user-info">
                <section className="user-header">
                    <h1 className="user-title">YOUR DATA</h1>
                    <p className="user-subtitle">"Manage your inputs and get personalized recommendations."</p>
                </section>
                <section className="user-details">
                    <h2 className="section-title">Personal Info</h2>
                    <div className="user-card">
                        <div className="user-grid">
                            <div className="label">Name:</div>
                            <div>John Doe</div>
                            <div className="label">Phone Number:</div>
                            <div>123-456-7890</div>
                            <div className="label">Email Address:</div>
                            <div>john.doe@example.com</div>
                            <div className="label">Location:</div>
                            <div>123 Farm Lane</div>
                            <div className="label">Farm Area:</div>
                            <div>50 acres</div>
                            <div className="label">Weather:</div>
                            <div>Sunny</div>
                        </div>
                        <div className="btn-group">
                            <button className="edit-btn">Edit</button>
                            <button className="delete-btn">Delete</button>
                        </div>
                    </div>
                </section>
                <section className="saved-techniques">
                    <h2 className="section-title">Saved Techniques</h2>
                    <div className="techniques-container">
                        {techniques.map((tech, index) => (
                            <div key={index} className="technique-card">
                                <img src={tech.image} alt={tech.title} className="technique-image" />
                                <h3 className="technique-title">{tech.title}</h3>
                                <p>{tech.description}</p>
                                <Link to="#" className="learn-more">Learn More</Link>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            {/* <footer className="footer">
                <div className="footer-content">
                    <div>
                        <h3 className="footer-title">About Us</h3>
                        <p>Empowering Farmers with Water Solutions</p>
                    </div>
                    <div>
                        <h3 className="footer-title">Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/techniques">Techniques</Link></li>
                            <li><Link to="/userinfo">User Info</Link></li>
                            <li><Link to="/contactus">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="footer-title">Contact Us</h3>
                        <p>Email: support@rainwater.com</p>
                        <p>Phone: +91 5123456789</p>
                        <p>Address: VIT Bhopal University, Sehore</p>
                    </div>
                </div>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
                <p className="footer-note">© 2024 RainWater Solutions. All rights reserved.</p>
            </footer> */}
        </div>
    );
};

export default App;
