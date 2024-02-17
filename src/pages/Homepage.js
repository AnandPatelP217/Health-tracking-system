import React from "react";
import Navbar from "../components/Navbar";
import HomeBanner1 from "../components/HomeBanner1.tsx";
import HomeBanner2 from "../components/HomeBanner2.tsx";
import Home from "../components/Home.jsx";
import Footer from "../components/Footer.jsx";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      {/* <HomeBanner1 /> */}
      {/* <HomeBanner2 /> */}
    </>
  );
};

export default Homepage;

