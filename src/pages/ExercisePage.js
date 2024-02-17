import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeBanner2 from "../components/HomeBanner2.tsx";

const ExercisePage = () => {
  return (
    <>
      <Navbar />
      <div className="margin-top-max">
        <HomeBanner2 />
      </div>
      <Footer />
    </>
  );
};

export default ExercisePage;
