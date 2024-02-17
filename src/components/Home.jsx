import React from "react";
import "../stylesheets/Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="smallcontainer2">
          <img src="./images/yoga.jpg" alt="yoga" />
        </div>
        <div className="smallcontainer1">
          <h1> HEALTH AND WELNESS </h1>
          <h3>Empowering Your Fitness Journey, One Rep at a Time!</h3>
          <p>
            "Speed and direction in fitness are like the compass and velocity of
            your journey towards your goals. They guide your movements, helping
            you navigate towards success with precision and efficiency."
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </>
  );
};

export default Home;
