import React, { useState } from "react";
import team from "./../Images/team.jpg";
import head from "./../Images/head.png";
import { Link } from "react-router-dom";
import Logo from "./../Images/Logo.png";
import cart from "./../Images/cart.png";
import whishlist from "./../Images/whishlist.png";

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);
 const navLinks = [
    { path: "/landing", label: "Home" },
    { path: "/", label: "Categories" },
    { path: "/", label: "Offers" },
    { path: "/about", label: "About Us" },
    { path: "/Doctors", label: "Contact Us" },
  ];

  return (
    <div className="w-full h-auto pb-6">
      <section className="fixed w-[100%] top-0 left-0 right-0 z-50 bg-[#F1F0E9]">
        {/* NAVBAR */}
        <nav className="flex items-center justify-between w-full max-w-screen-xl mx-auto px-4 py-2.5">
          {/* Logo */}
          <img src={Logo} className="w-12" alt="logo" />

          {/* Desktop Nav Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex gap-6 lg:gap-10 text-black">
              {navLinks.map(({ path, label }) => (
                <Link to={path} key={label}>
                  <p className="text-sm hover:underline cursor-pointer">
                    {label}
                  </p>
                </Link>
              ))}
            </ul>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-3">
              <img src={whishlist} className="w-5" alt="" />
              <img src={cart} className="w-5" alt="" />
              <button className="bg-[#8A7650] text-white rounded-lg px-3 py-1.5 text-sm">
                Login
              </button>
            </div>

            {/* Mobile Right (icons + hamburger) */}
            <div className="flex items-center gap-3 md:hidden">
              <img src={whishlist} className="w-5" alt="" />
              <img src={cart} className="w-5" alt="" />

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-2xl bg-[#e0d9d9] px-2 py-0.5 rounded-md"
              >
                ☰
              </button>
            </div>
          </div>
        </nav>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden bg-[#F1F0E9] px-4 pb-4 shadow-md">
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ path, label }) => (
                <Link to={path} key={label} onClick={() => setIsOpen(false)}>
                  <p className="text-black text-sm">{label}</p>
                </Link>
              ))}

              <button className="bg-[#8A7650] text-white rounded-lg px-3 py-2 text-sm mt-2">
                Login
              </button>
            </ul>
          </div>
        )}
      </section>

      <div className="w-full flex xl:flex-row-reverse flex-col-reverse xl:h-svh">
        <div className="xl:w-[50%] flex flex-row items-center justify-start">
          <div className=" w-full xl:w-[78%] flex flex-col justify-center gap-3 xl:gap-6 px-4 xl:pl-5 pt-6 xl:pt-10">
            <div className="flex flex-row items-center gap-2">
              <p className="text-[#000000] opacity-50 font-semibold font-sans text-2xl ">ABOUT US</p>
            </div>
            <p className="font-sans text-4xl leading-tight font-medium text-DarkBlack">
              Welcome To An-Naml
            </p>
            <p className="font-sans text-DarkBlack opacity-70 text-sm">
              At An-Naml, we bring together creativity, care, and purpose to
              offer thoughtfully crafted items that add meaning to everyday
              life. From beautifully designed assignment gifts to personalized
              products and essential items inspired by Deen, everything we
              create is made with intention and love.We believe that even the
              smallest things can carry great value — a gift, a reminder, or a
              customized piece that reflects your identity and faith.
            </p>{" "}
            <button className="w-[70%] xl:w-[50%] mt-4 ml-1 font-sans text-sm bg-[#8A7650] font-medium py-3 px-2 rounded-lg text-[#ffffff]">
              Know More About Us
            </button>
          </div>
        </div>
        <div className="xl:w-[50%] flex justify-center items-center h-auto">
          <div className=" w-[90%] xl:w-[61%] relative xl:h-[66%] flex flex-col gap-4 xl:gap-0">
            <div className="flex flex-row items-center gap-2 xl:hidden">
              <img src={team} className="w-8 opacity-80" alt="erroe" />
              <p className="text-[#a8b481] font-sans ">ABOUT US</p>
            </div>

            <img
              src={head}
              className=" mx-auto w-[85%] xl:w-[100%] relative xl:absolute xl:top-5 xl:left-3 z-10 rounded-xl xl:rounded-none"
              alt="error"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-5 xl:mt-2 ">
        <hr className="w-10/12 opacity-50" />
      </div>

     
   
      
    </div>
  );
};
export default AboutUs;
