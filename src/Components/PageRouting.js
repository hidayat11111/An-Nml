import React from "react";
import LandingPage from "./../Components/LandingPage";
import AssigmentPage from "./../Components/AssigmentPage";

import { Routes, Route } from "react-router-dom";
import StartPage from "./StartPage";
import DeenEssential from "./DeenEssential";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import GiftSection from "./GiftSections";
import JewelleryPage from "./JewelleryPage";
import FramesPage from "./FramesPage";
import FestivalCategories from "./FestivalCategories";
import MehendiPage from "./MehendiPage";
import HamperPage from "./HamperPage";
import CandlesrPage from "./CandlesPage";
import ChoclatePage from "./ChoclatePage";
const PageRouting = () => {
  return (
    <Routes>
    <Route path="/" element={<StartPage />} />
      <Route path="/Landing" element={<LandingPage />} />
      <Route path="/Frame" element={<FramesPage/>}/>
      <Route path="/AssigmentPage" element={<AssigmentPage/>} />
      <Route path="/Deen" element={<DeenEssential/>} />
      <Route path="/about" element={<AboutUs/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="/GiftSections" element={<GiftSection/>} />
       <Route path="/Jewellery" element={<JewelleryPage/>} />
       <Route path="/festival" element={<FestivalCategories/>} />
        <Route path="/mehdi" element={<MehendiPage/>} />
       <Route path="/hamper" element={<HamperPage/>} />
       <Route path="/candles" element={<CandlesrPage/>} />
       <Route path="/choc" element={<ChoclatePage/>} />
       


      {/* <Route path="/assigment" element={<AssigmentsPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/Doctors" element={<Doctors />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
};
export default PageRouting;
