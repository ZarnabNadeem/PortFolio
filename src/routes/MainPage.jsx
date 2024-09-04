import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import MiddleInfo from "../components/MiddleInfo";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <MiddleInfo />
      <Footer />
    </div>
  );
};

export default MainPage;
