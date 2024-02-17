import React from "react";
import "../stylesheets/FooterStyle.css";
import { NavLink } from "react-router-dom";

const Footer = () => {

  return (
    <>
      <footer className="margin-top-max">
        <div className="container" style={{ background: "transparent" }}>
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                {/* First Column */}
                <div className="col-6 col-lg-3">
                  <h2>Care Self</h2>
                  <ul>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">About Care Self</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                  </ul>
                </div>

                {/* Second Column */}
                <div className="col-6 col-lg-3">
                  <h2>Activity</h2>
                  <ul>
                    <li>
                      <NavLink to="/exercise">Exercises</NavLink>
                    </li>
                    <li>
                      <NavLink to="/goal">Set Goals</NavLink>
                    </li>
                  </ul>
                </div>

                {/* Third Column */}
                <div className="col-6 col-lg-3">
                  <h2>Contact</h2>
                  <ul>
                    <li>
                      <NavLink to="/">+91 9302765839</NavLink>
                    </li>
                    <li>
                      <NavLink to="mailto:care.self@gmail.com">
                        care.self@gmail.com
                      </NavLink>
                    </li>
                  </ul>
                </div>

                {/* Forth Column */}
                <div className="col-6 col-lg-3">
                  <h2>Social</h2>
                  <div className="social-media-buttons">
                    <NavLink
                      to=""
                      y
                      style={{ background: "#0a63bc" }}
                      className="link"
                      target="_blank"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </NavLink>
                    <NavLink
                      to=""
                      style={{ background: "#3b5998" }}
                      className="link"
                      target="_blank"
                    >
                      <i className="bx bxl-facebook"></i>
                    </NavLink>
                    <NavLink
                      to=""
                      style={{ background: "#db1c8a" }}
                      className="link"
                      target="_blank"
                    >
                      <i className="bx bxl-instagram"></i>
                    </NavLink>
                    <NavLink
                      to=""
                      style={{ background: "#03a9f4" }}
                      className="link"
                      target="_blank"
                    >
                      <i className="bx bxl-twitter"></i>
                    </NavLink>
                  </div>
                </div>
              </div>

              <hr />

              <div className="mt-4">
                <p className="paragraph text-center w-100">
                  © Copyright Care Self - 2024. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
