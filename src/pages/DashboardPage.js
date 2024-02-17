import React from "react";
import HomeBanner1 from "../components/HomeBanner1.tsx";
import HomeBanner2 from "../components/HomeBanner2.tsx";
import Buttons from "../components/Buttons.jsx";

const DashboardPage = () => {
  return (
    <>
      <HomeBanner1 />
      <Buttons />
      <HomeBanner2 />
    </>
  );
};

export default DashboardPage;
