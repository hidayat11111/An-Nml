import React,{useState} from "react";
import team from "./../Images/team.png";
import verified from "./../Images/verified.png";
import head from "./../Images/head.png";
import { Link } from "react-router-dom";
import Logo from "./../Images/Logo.png";

const AboutUs = () => {
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
       <section className="w-full fixed top-0 left-0 z-20 bg-[#EAE4DD]">
          <nav className="flex items-center justify-between  bg-[#EAE4DD] w-full">
          <img src={Logo} className="w-20" alt="error"/>
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

      <div className="w-full flex xl:flex-row flex-col-reverse xl:h-svh pt-24">
        <div className="xl:w-[50%] flex flex-row items-center justify-center ">
          <div className=" w-[90%] xl:w-[78%] flex flex-col justify-center gap-3 xl:gap-6 xl:pl-5 pt-12 xl:pt-0">
            <div className="flex flex-row items-center gap-2 hidden xl:block">
              <img src={team} className="w-8 opacity-80" alt="erroe" />
              <p className="text-[#a8b481] font-sans ">ABOUT US</p>
            </div>

            <p className="font-sans text-4xl leading-tight font-medium text-DarkBlack">
              Welcome To BHM Hospital and Nursing Home
            </p>

            <p className="font-sans text-DarkBlack opacity-70 text-sm">
              At BHM Hospital and Nursing Home , we are committed to providing
              the highest quality healthcare services to our community. Our team
              of highly skilled physicians, nurses, and healthcare professionals
              is dedicated to delivering compassionate care in a
              state-of-the-art facility.
            </p>
            <div className="flex flex-row gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-2">
                  <img
                    src={verified}
                    className="w-6 bg-[#EAE4DD] rounded-full"
                    alt="erroe"
                  />
                  <p className="text-[#a8b481] font-sans">
                    A Team of professionals
                  </p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  {" "}
                  <img
                    src={verified}
                    className="w-6 bg-[#EAE4DD] rounded-full"
                    alt="erroe"
                  />
                  <p className="text-[#a8b481] font-sans">
                    {" "}
                    7+ Years of Excellience
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-2">
                  <img
                    src={verified}
                    className="w-6 bg-[#EAE4DD] rounded-full"
                    alt="erroe"
                  />
                  <p className="text-[#a8b481] font-sans">
                    24/7 Medical Service{" "}
                  </p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  {" "}
                  <img
                    src={verified}
                    className="w-6 bg-[#EAE4DD] rounded-full"
                    alt="erroe"
                  />
                  <p className="text-[#a8b481] font-sans">
                    {" "}
                    A Multispeciality hospital
                  </p>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <button className=" mt-4 ml-1 font-sans text-sm bg-darkGreen font-medium py-3 px-3 rounded-lg text-[#ffffff]">
                Know More About Us
              </button>
            </div>
          </div>
        </div>
        <div className="xl:w-[50%] flex justify-center items-center h-auto">
          <div className=" w-[90%] xl:w-[61%] relative xl:h-[66%] flex flex-col gap-4 xl:gap-0">
            <div className="flex flex-row items-center gap-2 xl:hidden">
              <img src={team} className="w-8 opacity-80" alt="erroe" />
              <p className="text-[#a8b481] font-sans ">ABOUT US</p>
            </div>
           
            <div className="bg-[#D8BFD8] w-full pb-32 relative xl:absolute top-0 right-0 z-0 hidden xl:block"></div>
            <img
              src={head}
              className=" mx-auto w-[85%] xl:w-[94%] relative xl:absolute xl:top-5 xl:left-3 z-10 rounded-xl xl:rounded-none"
              alt="error"
            />
            <div className=" bg-darkGreen absolute left-0 bottom-0 z-0 w-full pb-32 hidden xl:block"></div>
            
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-5 xl:mt-2 ">
        <hr className="w-10/12 opacity-50" />
      </div>

      <div className="w-[95%] xl:w-[70%] mt-8 mx-auto border-2 border-[#DCDCDC] bg-[#DCDCDC] flex flex-row xl:justify-evenly gap-2 py-2 xl:py-10 text-center">
        <div className="flex flex-col gap-2">
          <p className="font-sans font-semibold text-4xl text-DarkBlack opacity-85">
            10
            <span className="text-[#D8BFD8] font-semibold opacity-100 text-3xl">
              +
            </span>
          </p>

          <p className="text-DarkBlack opacity-80 font-sans text-sm font-medium">
            National Awards
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-sans font-semibold text-4xl text-DarkBlack opacity-85">
            8
            <span className="text-[#D8BFD8] font-semibold opacity-100 text-3xl">
              +
            </span>
          </p>
          <p className="text-DarkBlack opacity-80 font-sans text-sm  font-medium">
            Expert Doctors
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-sans font-semibold text-4xl text-DarkBlack opacity-85">
            10
            <span className="text-[#D8BFD8] font-semibold opacity-100 text-3xl">
              +
            </span>
          </p>
          <p className="text-DarkBlack opacity-80 font-sans text-sm  font-medium">
            Satisfied Patients
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-sans font-semibold text-4xl text-DarkBlack opacity-85">
            1
            <span className="text-[#D8BFD8] font-semibold opacity-100 text-3xl">
              +
            </span>
          </p>
          <p className="text-DarkBlack opacity-80 font-sans text-sm  font-medium">
            Operation Success
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
