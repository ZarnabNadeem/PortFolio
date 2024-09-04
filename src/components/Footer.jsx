import "./FooterStyles.css";
import React from "react";
import { FaHome, FaMailBulk, FaPhone, FaGithub } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h6>
                <FaHome
                  size={25}
                  style={{ color: "#0961a8", marginRight: "2rem" }}
                />{" "}
                Pakistan.
              </h6>
            </a>
          </div>
          <div className="phone">
            <a
              href="tel:+923034849755"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h6>
                <FaPhone
                  size={20}
                  style={{ color: "#0961a8", marginRight: "2rem" }}
                />
                +92 303 4849755{" "}
              </h6>
            </a>
          </div>
          <div className="mail">
            <a
              href="mailto:zarnadeem0@gmail.com"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h6>
                <FaMailBulk
                  size={25}
                  style={{ color: "#0961a8", marginRight: "2rem" }}
                />{" "}
                zarnadeem0@gmail.com
              </h6>
            </a>
          </div>
          <div className="github">
            <a
              href="https://github.com/ZarnabNadeem"
              target="_blank"
              style={{ textDecoration: "none", color: "black" }}
              rel="noopener noreferrer"
            >
              <h6>
                <FaGithub
                  size={25}
                  style={{ color: "#0961a8", marginRight: "2rem" }}
                />
                ZarnabNadeem{" "}
              </h6>
            </a>
          </div>
        </div>
        <div className="down">
          <h5>© {year} Zarnab Nadeem ── Portfolio</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
