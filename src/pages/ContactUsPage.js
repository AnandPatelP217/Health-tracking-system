import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/contact_components/Contact";
import Footer from "../components/Footer";
import ContactPageHeader from "../components/contact_components/ContactPageHeader";

const ContactUsPage = () => {
  return (
    <>
      <Navbar />
      <ContactPageHeader />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactUsPage;
