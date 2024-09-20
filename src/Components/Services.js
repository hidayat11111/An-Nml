import React, { useState } from "react";
import medicalServices from "./../Images/medicalServices.png";
import { Link } from "react-router-dom";
import Logo from "./../Images/Logo.png";
import cardiology from "./../Images/cardiology.png";
import endocrine from "./../Images/endocrine.png";
import stomach from "./../Images/stomach.png";
import ear from "./../Images/ear.png";
import gyno from "./../Images/gyno.png";
import Echocardiology from "./../Images/Echocardiology.png";
import ortho from "./../Images/ortho.png";
import CTG from "./../Images/CTG.png";
import labo from "./../Images/labo.png";
import generaSurgery from "./../Images/generalSurgery.png";
import generalMedicine from "./../Images/generalMedicine.png";
import laparoscopy from "./../Images/laparoscopy.png";
const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { path: "/Landing", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/Doctors", label: "Doctors" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full h-auto pb-6">
      <section className="w-full fixed top-0 left-0 z-10 bg-[#EAE4DD]">
        <nav className="flex items-center justify-between  bg-[#EAE4DD] w-full">
          <img src={Logo} className="w-20" alt="error" />
          <div className="px-5 xl:px-12 py-6 flex w-full items-center justify-between">
            {/* Full Menu for Larger Screens */}
            <div className="xl:flex flex-grow items-center justify-end">
              <ul className="hidden md:flex pr-16 font-light font-heading space-x-12">
                {navLinks.map(({ path, label }) => (
                  <Link to={path} key={label}>
                    <p className=" text-DarkBlack opacity-85 font-sans font-medium text-sm bg-gradient-to-r from-slate-300 to-white bg-clip-text text-transparent hover:text-gray-800 hover:bg-none hover:underline">
                      {label}
                    </p>
                  </Link>
                ))}
              </ul>
            </div>

            {/* Burger Icon for Mobile View */}
            <button
              className="xl:hidden flex items-center space-x-5"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`py-4 fixed top-0 right-0 h-auto w-full text-white transition-transform transform ${
              isOpen ? "translate-x-0 shadow-lg" : "translate-x-full"
            } z-20 overflow-hidden`}
            style={{
              background:
                "linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)",
              boxShadow: isOpen
                ? "0 4px 20px rgba(255, 255, 255, 0.4)"
                : "none",
            }}
          >
            <button
              className="absolute top-4 right-4 rounded-full text-2xl bg-lightGreen text-DarkBlack px-2.5 "
              onClick={toggleMenu}
              aria-expanded={isOpen}
            >
              &times;
            </button>
            <ul className="flex flex-col items-center p-5 space-y-4 max-h-[80vh] overflow-y-auto ">
              <div className="flex flex-col gap-2.5">
                {navLinks.map(({ path, label }) => (
                  <li key={label} className="list-none">
                    <Link
                      to={path}
                      onClick={toggleMenu}
                      className="font-sans font-normal text-sm bg-gradient-to-r from-slate-300 to-white bg-clip-text text-transparent hover:text-white hover:underline underline-offset-4 decoration-gray-500"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </nav>
      </section>

      <div className=" flex flex-col items-center pt-24 gap-6">
        <div className="flex flex-row items-center gap-2 ">
          <img src={medicalServices} className="w-8 opacity-80" alt="erroe" />
          <p className="text-[#a8b481] font-sans ">Medical services</p>
        </div>

        <div className="xl:w-[80%] flex flex-col gap-5 xl:mt-0 mt-4">
          <div className="flex flex-row justify-center gap-5 flex-wrap ">
            {" "}
            <div className="flex flex-col items-center justify-center  rounded-md  w-[40%] xl:w-[20%] bg-darkGreen hover:bg-lightGreen cursor-pointer gap-1 py-3">
              <div className="bg-[#ffffff] w-fit p-2 rounded-full">
                <img
                  src={cardiology}
                  className="w-6 rounded-full"
                  alt="online session"
                />
              </div>
              <p>Cardiology</p>
              <p className="font-sans font-normal text-sm text-DarkBlack opacity-80 text-center">
                Delivering advanced cardiac care with cutting-edge technology.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center  rounded-md w-[40%]  xl:w-[20%]  gap-1  p-3 bg-darkGreen hover:bg-lightGreen cursor-pointer">
              <div className="bg-[#ffffff] w-fit p-2 rounded-full ">
                <img
                  src={endocrine}
                  className="w-6 rounded-full"
                  alt="online session"
                />
              </div>
              <p>Endocrinology</p>
              <p className="font-sans font-normal text-sm text-DarkBlack opacity-80 text-center">
                Offering special endocrine care with advanced diagnostics.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-md w-[40%] xl:w-[20%]  gap-1  p-3 bg-darkGreen hover:bg-lightGreen cursor-pointer">
              <div className="bg-[#ffffff] w-fit p-2 rounded-full ">
                <img
                  src={stomach}
                  className="w-6 rounded-full"
                  alt="online session"
                />
              </div>
              <p>Gastroenterology</p>
              <p className="font-sans font-normal text-sm text-DarkBlack opacity-80 text-center">
                Expert gastroenterology care with advanced diagnostics.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center  rounded-md w-[40%] xl:w-[20%]  gap-1  p-3 bg-darkGreen hover:bg-lightGreen cursor-pointer">
              <div className="bg-[#ffffff] w-fit p-2 rounded-full">
                <img
                  src={ear}
                  className="w-6 rounded-full"
                  alt="online session"
                />
              </div>
              <p>ENT</p>
              <p className="font-sans font-normal text-sm text-DarkBlack opacity-80 text-center">
                Delivering specialized ENT care with advanced techniques.{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-center gap-5 flex-wrap ">
            {" "}
            <div className="flex flex-col items-center justify-center rounded-md w-[80%] xl:w-[20%]  gap-1  p-3  bg-darkGreen hover:bg-lightGreen cursor-pointer">
              <div className="bg-[#ffffff] w-fit p-2 rounded-full ">
                <img
                  src={gyno}
                  className="w-6 rounded-full"
                  alt="online session"
                />
              </div>
              <p>Gynecology</p>
              <p className="font-sans font-normal text-sm text-DarkBlack opacity-80 text-center">
                Provideing comprehensive gynecology care with a centered
                approach.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center  rounded-md  w-[80%]  xl:w-[20%]  gap-1  p-3  bg-darkGreen hover:bg-lightGreen cursor-pointer">
              <div className="bg-[#ffffff] w-fit p-2 rounded-full ">
                <img
                  src={ortho}
                  className="w-6 rounded-full"
                  alt="online session"
                />
              </div>
              <p>Orthology</p>
              <p className="font-sans font-normal text-sm text-DarkBlack opacity-80 text-center">
                Offers advanced orthopedic care with innovative treatments
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-md  w-[80%] xl:w-[20%]  gap-1 p-3  bg-darkGreen hover:bg-lightGreen cursor-pointer">
              <div className="bg-[#ffffff] w-fit p-2 rounded-full ">
                <img
                  src={CTG}
                  className="w-6 rounded-full"
                  alt="online session"
                />
              </div>
              <p>CTG</p>
              <p className="font-sans font-normal text-sm text-DarkBlack opacity-80 text-center">
                Providing expert orthopedic care with rehabilitation plans.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center  rounded-md  w-[80%] xl:w-[20%]   gap-1  p-3 bg-darkGreen hover:bg-lightGreen cursor-pointer">
              <div className="bg-[#ffffff] w-fit p-2 rounded-full flex flex-col items-center">
                <img
                  src={Echocardiology}
                  className="w-6 rounded-full"
                  alt="online session"
                />
              </div>
              <p>Echocardiology</p>
              <p className="font-sans font-normal text-sm text-DarkBlack opacity-80 text-center">
                Best echocardiography services with advanced imaging.{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-center gap-5 flex-wrap ">
            {" "}
            <div className="flex flex-col items-center justify-center rounded-md w-[40%] xl:w-[20%]  gap-1  p-3  bg-darkGreen hover:bg-lightGreen cursor-pointer">
              <div className="bg-[#ffffff] w-fit p-2 rounded-full flex flex-col items-center ">
                <img
                  src={laparoscopy}
                  className="w-6 rounded-full"
                  alt="online session"
                />
              </div>
              <p className="text-center">Laparoscopic</p>
              <p className="font-sans font-normal text-sm text-DarkBlack opacity-80 text-center">
                Offering minimally invasive laparoscopic procedures with expert
                care
              </p>
            </div>
            <div className="flex flex-col items-center justify-center   rounded-md w-[40%] xl:w-[20%]  gap-1  p-3  bg-darkGreen hover:bg-lightGreen cursor-pointer">
              <div className="bg-[#ffffff] w-fit p-2 rounded-full flex flex-col items-center">
                <img
                  src={generalMedicine}
                  className="w-6 rounded-full"
                  alt="online session"
                />
              </div>
              <p>General Medicine</p>
              <p className="font-sans font-normal text-sm text-DarkBlack opacity-80 text-center">
                Providing a comprehensive general medicine care with accurate
                diagnosis
              </p>
            </div>
            <div className="flex flex-col items-center justify-center  rounded-md w-[40%] xl:w-[20%]  gap-1  p-3 bg-darkGreen hover:bg-lightGreen cursor-pointer">
              <div className="bg-[#ffffff] w-fit p-2 rounded-full flex flex-col items-center">
                <img
                  src={generaSurgery}
                  className="w-6 rounded-full"
                  alt="online session"
                />
              </div>
              <p>General Surgery</p>
              <p className="font-sans font-normal text-sm text-DarkBlack opacity-80 text-center">
                Delivering skilled general surgery with advanced techniques
              </p>
            </div>
            <div className="flex flex-col items-center justify-center  rounded-md  bg-darkGreen  p-3 gap-1 hover:bg-lightGreen cursor-pointer w-[40%] xl:w-[20%]">
              <div className="bg-[#ffffff] w-fit p-2 rounded-full flex flex-col items-center">
                <img
                  src={labo}
                  className="w-6 rounded-full"
                  alt="online session"
                />
              </div>
              <p>Clinic Laboratory</p>
              <p className="font-sans font-normal text-sm text-DarkBlack opacity-80 text-center">
                Offering precise and reliable diagnostic testing with a good
                technology
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-10 ">
        <hr className="w-10/12 opacity-50" />
      </div>
    </div>
  );
};
export default Services;
