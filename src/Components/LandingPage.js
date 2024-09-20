import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../Images/Logo.png";
import Health from "./../Images/Health.png";
import Process from "./../Images/Process.png";
import doctor from "./../Images/doctor.png";
import bacteria from "./../Images/bacteria.png";
import firstAid from "./../Images/firstAid.png";
import HospitalPhoto from "./../Images/HospitalPhoto.png";
import facilities from "./../Images/facilities.png";
import onlineSession from "./../Images/onlineSession.png";
import canteen from "./../Images/canteen.png";
import Emergency from "./../Images/Emergency.png";
import Pharmacy from "./../Images/Pharmacy.png";
import operation from "./../Images/operation.png";
import bgd from "./../Images/bgd.jpg";
import Footer from "./Footer";
import { useState } from "react";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { path: "/landing", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/Doctors", label: "Doctors" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="w-full h-svh relative">
        <section className="w-full fixed top-0 left-0 z-10 bg-[#EAE4DD]">
          <nav className="flex items-center justify-between  bg-[#EAE4DD] w-full">
            <img src={Logo} className="w-16" alt="error" />
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

        <div className="h-svh w-full pt-24 xl:pt-10 flex flex-col-reverse gap-3 xl:gap-0 xl:flex-row justify-center items-center xl:justify-around bg-[#F5F7F8] ">
          <div className="flex flex-col gap-3 w-[90%] xl:w-[40%]">
            <div className="flex flex-row gap-2 items-center hidden xl:block">
              {" "}
              <img src={Health} className="w-8" alt="error" />{" "}
              <p className="font-sans opacity-70 text-sm text-DarkBlack">
                Welcome to BHM Hospital and Nursing Home
              </p>
            </div>
            <p className="font-sans xl:text-5xl text-4xl leading-tight xl:leading-tight font-medium text-DarkBlack w-[98%] xl:w-auto">
              Taking care of <br /> your health is our top priority
            </p>
            <p className="font-sans text-DarkBlack opacity-70 text-sm mt-2">
              Being healthy is more than just not getting sick. It involves
              mental, physical, and social well-being. It's not just about
              treatment; it's about how you feel
            </p>
          </div>

          <img
            src={HospitalPhoto}
            className=" w-[80%] xl:w-[30%] "
            alt="error"
          />

          <div className="flex gap-2 items-center  xl:hidden">
            {" "}
            <img src={Health} className="w-8" alt="error" />{" "}
            <p className="font-sans opacity-70 text-sm text-DarkBlack">
              Welcome to BHM Hospital and Nursing Home
            </p>
          </div>
        </div>
      </div>

      <div className="h-auto w-full flex flex-col gap-16 items-center">
        <div className="w-full flex flex-col items-center mt-10 ">
          <hr className="w-10/12 opacity-50" />
        </div>

        <div className="w-[70%] flex flex-col items-center gap-4">
          <div className="flex flex-row gap-2 items-center mt-2 ">
            {" "}
            <img src={Process} className="w-8 opacity-70" alt="error" />{" "}
            <p className="text-[#a8b481]">OUR WORK PROCESS</p>
          </div>
          <p className="font-sans text-4xl font-medium text-DarkBlack text-center opacity-95">
            Let’s see how we can make <br /> this happen
          </p>
          <div className="w-[90%] flex flex-row flex-wrap justify-evenly">
            <div className="flex flex-col p-4 items-center gap-4">
              <div className=" bg-lightGreen rounded-full p-5">
                <img src={doctor} className="w-24" alt="error" />
              </div>
              <p className="font-sans text-DarkBlack font-medium opacity-70">
                Seeing Patients
              </p>
            </div>
            <div className="flex flex-col p-4 items-center gap-4">
              <div className=" bg-lightGreen rounded-full p-5">
                <img src={bacteria} className="w-24" alt="error" />
              </div>
              <p className="font-sans text-DarkBlack font-medium opacity-70">
                Make Diagnosis
              </p>
            </div>
            <div className="flex flex-col p-5 items-center gap-4">
              <div className=" bg-lightGreen rounded-full p-4 ">
                {" "}
                <img src={firstAid} className="w-24" alt="error" />
              </div>
              <p className="font-sans text-DarkBlack font-medium opacity-70">
                Treatment
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center mt-4">
          <hr className="w-10/12 opacity-50" />
        </div>
      </div>

      <div className="w-full flex xl:flex-row flex-col mt-12 xl:gap-0 gap-12 ">
        <div className="xl:w-2/4 flex flex-col gap-4 pl-[8%] justify-center">
          <div className="flex flex-row gap-2 items-center">
            {" "}
            <img src={facilities} className="w-8 opacity-70" alt="error" />
            <p className="text-[#a8b481] font-sans">OUR FACILITIES</p>
          </div>
          <h1 className="font-sans text-5xl leading-tight font-medium text-DarkBlack opacity-95">
            Facilities That We Provide
          </h1>
          <p className="font-sans text-DarkBlack opacity-70 w-[90%]">
            Our hospital provides advanced medical services with the latest
            technology and highly specialized departments.Patients benefit from
            comfortable inpatient facilities
          </p>
          <div>
            <button className="flex flex-row items-center gap-1 text-darkGreen border-2 border-darkGreen font-medium px-6 rounded-lg py-2 font-sans text-sm hover:bg-darkGreen hover:text-DarkBlack">
              View All{" "}
            </button>
          </div>
        </div>
        <div className="xl:w-2/4 flex xl:flex-row flex-col justify-center items-center gap-3 ">
          <div className="flex xl:flex-col justify-center gap-4 xl:w-[40%] w-[96%] ">
            <div className="bg-darkGreen p-3 rounded-lg w-full flex flex-col gap-2">
              <div className="bg-[#ffffff] w-fit p-2 rounded-full  ">
                <img
                  src={onlineSession}
                  className="w-10"
                  alt="online session"
                />
              </div>
              <p className="font-sans font-medium text-DarkBlack">
                online session
              </p>
              <p className="font-sans font-normal text-sm text-DarkBlack opacity-80">
                As a hospital provider, our Online Sessions Facility enables
                patients to access expert medical consultations from the comfort
                of their homes.
              </p>
            </div>
            <div className="bg-darkGreen p-3 rounded-lg flex flex-col gap-2 w-full">
              <div className="bg-[#ffffff] w-fit  p-2 rounded-full">
                <img src={operation} className="w-10" alt="online session" />
              </div>
              <p className="font-sans font-medium text-DarkBlack">
                Instant Surgery
              </p>
              <p className="font-sans font-normal text-sm text-DarkBlack opacity-80">
                As a hospital provider, our Instant Operation Facility offers
                immediate surgical care for patients facing critical,
                life-threatening conditions.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 xl:w-[40%] w-[80%]">
            <div className="bg-darkGreen p-3 rounded-lg flex flex-col gap-3 w-full">
              <div className="bg-[#ffffff] w-fit p-2 rounded-full">
                <img src={Pharmacy} className="w-10" alt="online session" />
              </div>
              <p className="font-sans font-medium text-DarkBlack">Pharmacy</p>
              <p className="font-sans font-normal text-sm text-DarkBlack opacity-80">
                As hospital provider, our Pharmacy Facility ensures timely
                access to a wide range of the medications for both inpatients
                and outpatients.
              </p>
            </div>{" "}
            <div className="bg-darkGreen p-3 rounded-lg flex flex-col gap-2 w-full">
              <div className="bg-[#ffffff] w-fit p-2 rounded-full">
                <img src={canteen} className="w-10" alt="online session" />
              </div>
              <p className="font-sans font-medium text-DarkBlack">Canteen</p>
              <p className="font-sans font-normal text-sm text-DarkBlack opacity-80">
                As a hospital provider, our Canteen Facility offers nutritious
                and has a hygienic meals for patients, visitors, and staff.
              </p>
            </div>{" "}
            <div className="bg-darkGreen p-3 rounded-lg flex flex-col gap-2 w-full">
              <div className="bg-[#ffffff] w-fit p-2 rounded-full">
                <img
                  src={Emergency}
                  className="w-10 rounded-full"
                  alt="online session"
                />
              </div>
              <p className="font-sans font-medium text-DarkBlack">
                Emergency Care
              </p>
              <p className="font-sans font-normal text-sm text-DarkBlack opacity-80">
                As a hospital provider, our Instant Operation Facility offers
                immediate surgical care for patients facing critical,
                life-threatening conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-12">
        <hr className="w-10/12 opacity-50" />
      </div>

      <div className=" w-full flex flex-col items-center pt-24">
        <p
          style={{
            backgroundImage: `url(${bgd})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "90%",
          }}
          className="font-sans text-4xl font-medium text-DarkBlack text-center opacity-95"
        >
          Why choose BHM Hospital ?
        </p>

        <div className="w-[75%] mt-16 flex xl:flex-row flex-col justify-evenly gap-12 xl:gap-0">
          <div className=" w-full xl:w-[40%] flex xl:flex-col gap-5 flex-wrap">
            <div className="bg-gradient-to-r from-[#E9EDC9] to-[#bcbdb4] p-4 rounded-lg">
              <p className="text-DarkBlack font-sans font-bold">
                Successful Treatment
              </p>
              <p className="font-sans text-[0.95rem] text-DarkBlack opacity-90">
                Our experience of treating thousands of patients each year
                prepares us to take core of the one who matters most-you.{" "}
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#bcbdb4] to-[#E9EDC9] p-4 rounded-lg">
              <p className="text-[#ffffff] font-sans font-bold">All answers</p>
              <p className="font-sans text-[0.95rem] text-DarkBlack opacity-90 ">
                Count on our experts to deliver not only accurate diagnosis but
                also the most of personalized and effective treatment plan.
              </p>
            </div>
          </div>
          <div className=" rounded-lg xl:w-[40%] bg-gradient-to-r from-[#bcbdb4] via-[#E9EDC9] to-[#bcbdb4] p-4 flex flex-col gap-3">
            <p className="font-sans text-[#ffffff]  font-bold text-3xl ">
              Best <br /> experience
            </p>
            <p className="font-sans text-[0.95rem] text-DarkBlack opacity-90 ">
              We employ the best specialists. Would you like to get to know our
              team and discover how they can help you on your healthcare
              journey?
            </p>
            <button className=" border-2 border-[#bcbdb4] font-sans font-medium bg-lightGreen w-[85%] rounded-lg py-2.5 mx-auto mt-2">
              More info
            </button>
          </div>
        </div>
      </div>

      {/* footer */}

      <Footer />
    </div>
  );
};
export default LandingPage;
