import React from 'react';
import "./footer.css";
import imgage from "../../../../src/images/logo2.png";

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-content">
            {/* Company Info */}
            <div className="footer-brand">
              <img
                src={imgage}
                alt="Company Logo"
                className="footer-logo"
              />
              <div className="footer-info-item">
                <strong>Address</strong>
                <p>Sector 10 C127 2nd floor noida up 201301</p>
              </div>
              <div className="footer-info-item">
                <strong>Contact</strong>
                <p>udichindia@gmail.com</p>
              </div>
              <div className="footer-info-item">
                <strong>Website</strong>
                <p>
                  <a href="http://13.201.13.219:5173/" className="website-link">
                    http://13.201.13.219:5173/
                  </a>
                </p>
              </div>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  📘
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  🐦
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  💼
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  📷
                </a>
              </div>
            </div>

            {/* Platform Overview */}
            <div className="footer-column">
              <h4>Platform Overview</h4>
              <ul>
                <li><a href="#">Construction</a></li>
                <li><a href="#">Assessment Types</a></li>
                <li><a href="#">Question Types</a></li>
                <li><a href="#">Processing</a></li>
                <li><a href="#">Security & Compliance</a></li>
                <li><a href="#">Reporting</a></li>
                <li><a href="#">APIs and Automotive Exports</a></li>
              </ul>
            </div>

            {/* Industries */}
            <div className="footer-column">
              <h4>Industries</h4>
              <ul>
                <li><a href="#">Construction</a></li>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">Assessment Library</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Administration Options</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Resources</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="copyright">
              Copyright © 2025 Talentaceess Corporation. All rights reserved.
            </div>
            <div className="footer-links">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Anti-Spam</a>
              <a href="#">Data Subject Requests</a>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  💼
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  🐦
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;