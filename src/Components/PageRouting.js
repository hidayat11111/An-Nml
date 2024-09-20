import React from "react";
import LandingPage from "./../Components/LandingPage";
import AboutUs from "./../Components/AboutUs";
import Services from "./../Components/Services";
import Doctors from "./../Components/Doctors";
import Contact from "./../Components/Contact";
import { Routes, Route } from "react-router-dom";
import StartPage from "./StartPage";
const PageRouting = () => {
  return (
    <Routes>
    <Route path="/" element={<StartPage />} />
      <Route path="/Landing" element={<LandingPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/Doctors" element={<Doctors />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
export default PageRouting;
