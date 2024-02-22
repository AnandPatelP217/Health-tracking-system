import React from "react";
import Navbar from "../components/Navbar";
import Diet from "../components/Diet";
import Footer from "../components/Footer";

const DietPage = () => {
  return (
    <>
      <Navbar />
      <Diet title={"Breakfast"} body={"meals for breakfast"} imageUrl={"/images/exercise.jpg"}/>
      <Footer />

      
    </>
  );
};

export default DietPage;
