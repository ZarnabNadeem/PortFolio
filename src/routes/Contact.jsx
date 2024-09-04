import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackGroundImg from "../components/BackGroundImg";
import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <BackGroundImg
        source="./images/contact.gif"
        heading="Contact me"
        subHeading="To reach me, Contact here."
      />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
