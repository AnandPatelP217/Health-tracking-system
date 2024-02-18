import React, { Component } from "react";
import "../stylesheets/NavbarStyle.css";
import "../index.css";
import { NavLink } from "react-router-dom";
import AuthPopup from "./AuthPopUp.tsx";

class Navbar extends Component {
  state = { clicked: false, isLoggedIn: false, showPopup: false };

  setShowPopup = (value) => {
    this.setState({ showPopup: value });
  };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { isLoggedIn, showPopup } = this.state;

    return (
      <>
        <nav>
          <NavLink to="/">
            <img src="/images/logo.png" alt="DocApoint" width={100} />
          </NavLink>

          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              {/* Close Button */}
              <div onClick={this.handleClick} className="close-btn">
                <div id="mobile" onClick={this.handleClick}>
                  <i id="bar" className="fas fa-times"></i>
                </div>
              </div>

              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/exercise">Exercises</NavLink>
              </li>
              <li>
                <NavLink to="/diet">Diet</NavLink>
              </li>
              <li>
                <NavLink to="/prevention">Preventions</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>

              <NavLink to="/register" className="btn-style">
                Sign Up
              </NavLink>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i id="bar" className="fas fa-bars"></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;

