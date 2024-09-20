import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../Images/Logo.png";
import medicalTeam from "./../Images/medicalTeam.png";
import DoctorPics from "./../Images/DoctorPics.png";
import female from "./../Images/female.png";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
//import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Doctors = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
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
    <div className="w-full h-auto pb-16">
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

      <div className=" w-[90%] xl:w-[70%] mx-auto flex flex-col h-auto gap-3 pt-24 ">
        <div className="flex flex-row items-center gap-2 pl-3 xl:pl-0">
          <img src={medicalTeam} className="w-8 opacity-80" alt="erroe" />
          <p className="text-[#a8b481] font-sans ">Medical services</p>
        </div>
        <p className="font-sans text-4xl font-medium text-DarkBlack opacity-95  pl-3 xl:pl-0 ">
          Our Best Doctors
        </p>

        {/* this for laptop view */}

        <div className="hidden xl:block">
          <Carousel
            className="w-full h-[50vh] mx-auto relative mt-4"
            activeIndex={index}
            onSelect={handleSelect}
            indicators={false}
            prevIcon={
              <span
                aria-hidden="true"
                className="carousel-control-prev-icon"
                style={{
                  backgroundColor: "black",
                  position: "absolute",
                  top: "45%",
                  left: "0",
                  borderRadius: "50%",
                }}
              />
            }
            nextIcon={
              <span
                aria-hidden="true"
                className="carousel-control-next-icon"
                style={{
                  backgroundColor: "black",
                  position: "absolute",
                  top: "45%",
                  right: "0",
                  borderRadius: "50%",
                }}
              />
            }
          >
            <Carousel.Item className="h-auto px-2 ">
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col gap-1 w-[23%] items-center relative">
                  <div className="bg-[#E8EAE6] w-full flex flex-col items-center py-3 px-1">
                    <img
                      className="w-[85%] xl:h-[32vh]"
                      src={DoctorPics}
                      alt="error"
                    />
                  </div>
                  <div className="flex flex-col items-center py-2.5 px-1 bg-darkGreen rounded-lg w-[90%] gap-2">
                    <p className="font-sans font-medium text-sm text-[#ffffff]">
                      Dr. Gobinder Singh Mehta
                    </p>
                    <p className="font-sans font-medium text-xs text-[#ffffff]">
                      MBBS, Ms(General Surgeon)
                    </p>
                  </div>
                </div>

                <div className="flex flex-col w-[23%] items-center gap-1 relative ">
                  <div className="bg-[#E8EAE6] w-full flex flex-col items-center py-3 px-1 ">
                    <img
                      className="w-[85%] h-[32vh]"
                      src={female}
                      alt="error"
                    />
                  </div>
                  <div className="flex flex-col items-center py-2.5 px-1 bg-darkGreen rounded-lg w-[90%] gap-2 ">
                    <p className="font-sans font-medium text-sm text-[#ffffff]">
                      Dr. Nousheen
                    </p>
                    <p className="font-sans font-medium text-xs text-[#ffffff]">
                      MBBS, Ms(Gynecologist)
                    </p>
                  </div>
                </div>

                <div className="flex flex-col w-[23%] items-center gap-1 relative  ">
                  <div className="bg-[#E8EAE6] w-full flex flex-col items-center py-3 px-1 ">
                    <img
                      className="w-[85%] h-[32vh]"
                      src={DoctorPics}
                      alt="error"
                    />
                  </div>
                  <div className="flex flex-col items-center py-2.5 px-1 bg-darkGreen rounded-lg w-[90%] gap-2 ">
                    <p className="font-sans font-medium text-sm text-[#ffffff]">
                      Dr. Irfan Ahmad Bhat
                    </p>
                    <p className="font-sans font-medium text-xs text-[#ffffff]">
                      MD (Cardiology)
                    </p>
                  </div>
                </div>

                <div className="w-[23%] flex flex-col items-center gap-1 relative ">
                  <div className="bg-[#E8EAE6] w-full flex flex-col items-center py-3 px-1">
                    <img
                      className="w-[85%] h-[32vh]"
                      src={DoctorPics}
                      alt="error"
                    />
                  </div>
                  <div className="flex flex-col items-center py-2.5 px-1 bg-darkGreen rounded-lg w-[90%] gap-2">
                    <p className="font-sans font-medium text-sm text-[#ffffff]">
                      Dr. Manzoor Ahmad
                    </p>
                    <p className="font-sans font-medium text-xs text-[#ffffff]">
                      MBBS,MD(Dermatology)
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item className="h-auto px-2">
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col w-[23%] items-center gap-1  relative">
                  <div className="bg-[#E8EAE6] w-full flex flex-col items-center py-3 px-1 ">
                    <img
                      className="w-[85%] h-[32vh]"
                      src={DoctorPics}
                      alt="error"
                    />
                  </div>
                  <div className="flex flex-col items-center py-2.5 px-1 bg-darkGreen rounded-lg w-[90%] gap-2">
                    <p className="font-sans font-medium text-sm text-[#ffffff]">
                      Dr shakeel Ahmad
                    </p>
                    <p className="font-sans font-medium text-xs text-[#ffffff]">
                      MBBS, D.ortho 
                    </p>
                  </div>
                </div>

                <div className="flex flex-col w-[23%] items-center gap-1 relative">
                  <div className="bg-[#E8EAE6] w-full flex flex-col items-center py-3 px-1 ">
                    <img
                      className="w-[85%] h-[32vh] "
                      src={DoctorPics}
                      alt="error"
                    />
                  </div>
                  <div className="flex flex-col items-center py-2.5 px-1 bg-darkGreen rounded-lg w-[90%] gap-2">
                    <p className="font-sans font-medium text-sm text-[#ffffff]">
                      Dr. Salman Khursheed
                    </p>
                    <p className="font-sans font-medium text-xs text-[#ffffff]">
                      Ms(ENT)
                    </p>
                  </div>
                </div>

                <div className="flex flex-col w-[23%] items-center gap-1  relative">
                  <div className="bg-[#E8EAE6] w-full flex flex-col items-center py-3 px-1 ">
                    <img
                      className="w-[85%] h-[32vh]"
                      src={DoctorPics}
                      alt="error"
                    />
                  </div>
                  <div className="flex flex-col items-center py-2.5 px-1 bg-darkGreen rounded-lg w-[90%] gap-2">
                    <p className="font-sans font-medium text-sm text-[#ffffff]">
                      Dr. Muzaffar Ahangar
                    </p>
                    <p className="font-sans font-medium text-xs text-[#ffffff]">
                      MD (general.,Laparoscopic)
                    </p>
                  </div>
                </div>

                <div className="w-[23%] flex flex-col items-center gap-1 relative">
                  <div className="bg-[#E8EAE6] w-full flex flex-col items-center py-3 px-1 ">
                    <img
                      className="w-[85%] h-[32vh]"
                      src={DoctorPics}
                      alt="error"
                    />
                  </div>
                  <div className="flex flex-col items-center py-2.5 px-1 bg-darkGreen w-[90%] rounded-lg gap-2">
                    <p className="font-sans font-medium text-sm text-[#ffffff]">
                      Dr. Tajamul Islam
                    </p>
                    <p className="font-sans font-medium text-xs text-[#ffffff]">
                      MD(Neonatology  & Pediatrics)
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* this is for mobile view */}

        <div className="block xl:hidden">
          <Carousel
            className="relative mt-4 "
            activeIndex={index}
            indicators={false}
            onSelect={handleSelect}
            prevIcon={
              <span
                aria-hidden="true"
                className="carousel-control-prev-icon"
                style={{
                  backgroundColor: "black",
                  position: "absolute",
                  top: "45%",
                  left: "0",
                  borderRadius: "50%",
                }}
              />
            }
            nextIcon={
              <span
                aria-hidden="true"
                className="carousel-control-next-icon"
                style={{
                  backgroundColor: "black",
                  position: "absolute",
                  top: "45%",
                  right: "0",
                  borderRadius: "50%",
                }}
              />
            }
          >
            <Carousel.Item className="h-auto px-2">
              <div className="flex flex-col gap-1 w-[80%] items-center relative mx-auto">
                <div className="bg-[#E8EAE6] w-full flex flex-col items-center py-3 px-1 rounded-xl">
                  <img
                    className="w-[85%] xl:h-[32vh]"
                    src={DoctorPics}
                    alt="error"
                  />
                </div>
                <div className="flex flex-col items-center py-2.5 px-1 bg-darkGreen rounded-lg w-[90%] gap-2">
                  <p className="font-sans font-medium text-sm text-[#ffffff]">
                    Dr. Gobinder Singh Mehta
                  </p>
                  <p className="font-sans font-medium text-xs text-[#ffffff]">
                    MBBS, Ms(General Surgeon)
                  </p>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item className="h-auto px-2 ">
              <div className="flex flex-col gap-1 w-[80%] items-center relative mx-auto">
                <div className="bg-[#E8EAE6] w-full flex flex-col items-center py-3 px-1 rounded-xl">
                  <img
                    className="w-[85%] xl:h-[32vh]"
                    src={DoctorPics}
                    alt="error"
                  />
                </div>
                <div className="flex flex-col items-center py-2.5 px-1 bg-darkGreen w-[90%] rounded-lg gap-2">
                  <p className="font-sans font-medium text-sm text-[#ffffff]">
                    Dr. Manzoor Ahmad
                  </p>
                  <p className="font-sans font-medium text-xs text-[#ffffff]">
                    MBBS,MD(Dermatology)
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="h-auto px-2 ">
              <div className="flex flex-col gap-1 w-[80%] items-center relative mx-auto">
                <div className="bg-[#E8EAE6] w-full flex flex-col items-center py-3 px-1 rounded-xl">
                  <img
                    className="w-[85%] xl:h-[32vh]"
                    src={DoctorPics}
                    alt="error"
                  />
                </div>
                <div className="flex flex-col items-center py-2.5 px-1 bg-darkGreen rounded-lg w-[90%] gap-2">
                  <p className="font-sans font-medium text-sm text-[#ffffff]">
                    Dr. Irfan Ahmad Bhat
                  </p>
                  <p className="font-sans font-medium text-xs text-[#ffffff]">
                    MD (Cardiology)
                  </p>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item className="h-auto px-2 ">
              <div className="flex flex-col gap-1 w-[80%] items-center relative mx-auto">
                <div className="bg-[#E8EAE6] w-full flex flex-col items-center py-3 px-1 rounded-xl">
                  <img
                    className="w-[85%] xl:h-[32vh]"
                    src={DoctorPics}
                    alt="error"
                  />
                </div>
                <div className="flex flex-col items-center py-2.5 px-1 bg-darkGreen rounded-lg w-[90%] gap-2">
                  <p className="font-sans font-medium text-sm text-[#ffffff]">
                    Dr. Gobinder Singh Mehta
                  </p>
                  <p className="font-sans font-medium text-xs text-[#ffffff]">
                    MBBS, Ms(General Surgeon)
                  </p>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item className="h-auto px-2">
              <div className="flex flex-col gap-1 w-[80%] items-center relative mx-auto">
                <div className="bg-[#E8EAE6] w-full flex flex-col items-center py-3 px-1">
                  <img
                    className="w-[85%] xl:h-[32vh]"
                    src={DoctorPics}
                    alt="error"
                  />
                </div>
                <div className="flex flex-col items-center py-2.5 px-1 bg-darkGreen rounded-lg w-[90%] gap-2 ">
                  <p className="font-sans font-medium text-sm text-[#ffffff]">
                    Dr. Nousheen
                  </p>
                  <p className="font-sans font-medium text-xs text-[#ffffff]">
                    MBBS, Ms(Gynecologist)
                  </p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="mt-3">
          {" "}
          <button className="ml-1 font-sans text-sm text-darkGreen border-darkGreen font-medium py-3 px-3 border-2 rounded-lg ">
            Book Appointment
          </button>
        </div>

        <div className="w-full flex flex-col items-center mt-5 xl:mt-2 ">
          <hr className="w-10/12 opacity-50" />
        </div>
      </div>
    </div>
  );
};
export default Doctors;
