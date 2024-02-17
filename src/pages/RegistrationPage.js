import React from "react";
import "../stylesheets/RegistrationFormStyle.css";
import Navbar from "../components/Navbar";
import RegistrationForm from "../components/form_components/RegistrationForm";

const RegistrationPage = () => {
  return (
    <>
      <Navbar />
      <RegistrationForm />
    </>
  );
};

export default RegistrationPage;
