import React from "react";
import { useState } from "react";
import frame from "./../Images/frame.jpeg";
import letter from "./../Images/letter.jpeg";
import candle from "./../Images/candle.jpeg";
import Canvas from "./../Images/canvas.jpeg";
import cframe from "./../Images/cframe.jpeg";
import novel from "./../Images/novel.jpeg";
import boki from "./../Images/boki.jpeg";
import bottle from "./../Images/bottle.jpeg";
import cart from "./../Images/cart.png";
import whishlist from "./../Images/whishlist.png";
import Logo from "./../Images/Logo.png";
import Cental from "./../Images/Cental.jpg"
import { Link } from "react-router-dom";
const GiftPage=()=>{
    const [isOpen, setIsOpen] = useState(false);

const gift = [
    {
      id: 1,
      title: "Frames",
      price: 300,
      oldPrice: 365,
      desc: "/ per frame",
      image: frame,
      offer: "18% Off",
    },
    {
      id: 2,
      title: "Candles",
      price: 60,
      oldPrice: 75,
      desc: "/ per candle ",
       image: candle,
      offer: "20% Off",
    },
    {
      id: 3,
      title: "Hand written letters",
      price: 120,
      oldPrice: 150,
      desc: "/ per letter",
      image: letter,
      offer: "20% Off",
    },
    {
      id: 4,
      title: "Message Bottle",
      price: 80,
      oldPrice: 100,
      desc: "/ per bottle",
     image: bottle,
      offer: "20% Off",
    },
    {
      id: 5,
      title: "calligraphic Frames",
      price: 300,
      oldPrice: 384,
      desc: "/ per Name",
      image: cframe,
      offer: "22% Off",
    },
    {
      id: 6,
      title: "Canvas",
      price: 250,
      oldPrice: 300,
      desc: "/ Per Canvas",
     image: Canvas,
      offer: "17% Off",
    },
    {
      id: 7,
      title: "Novel Themed Frames",
      price: 300,
      oldPrice: 375,
      desc: "/ per Frame",
      image: novel,
      offer: "20% Off",
    },
    {
      id: 8,
      title: "Customized bouquet",
      price: 650,
      oldPrice: 812,
      desc: "/ per Bouquet",
      image: boki,
      offer: "20% Off",
    },
     {
      id: 9,
      title: "Scented candles",
      price: 150,
      oldPrice: 187,
      desc: "/ per Candle",
      image: Cental,
      offer: "20% Off",
    },
    
  ];
     const navLinks = [
    { path: "/landing", label: "Home" },
    { path: "/about", label: "Categories" },
    { path: "/about", label: "Offers" },
    { path: "/services", label: "About Us" },
    { path: "/Doctors", label: "Contact Us" },
  ];
  



    return(
        <div className="flex flex-col items-center">


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

        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl bg-[#e0d9d9] px-2 py-0.5 rounded-md">
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
   <div
      className="
        grid 
        grid-cols-2 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        gap-9 md:gap-5 lg:gap-6
        mt-28
        px-3 sm:px-6
        w-[90%]
      "
    >
      {gift.map((itemm) => (
        <div
          key={itemm.id}
          className="bg-white rounded-xl shadow-[inset_0_2px_6px_rgba(0,0,0,0.1)] py-4 px-3.5 flex flex-col items-start gap-3 relative transform transition duration-300 hover:scale-105"
        >
          {/* Offer */}
          <button className="absolute top-5 left-5 bg-[#bbaa89] text-white px-3 py-1 rounded-md text-xs font-medium">
            {itemm.offer}
          </button>

          {/* Fav */}
          <div className="w-5 absolute top-5 right-5 cursor-pointer">
            {/* <img src={fav} alt="fav" /> */}
          </div>

          {/* Image */}
          <img
            src={itemm.image}
            alt={itemm.title}
            className="w-full h-32 rounded-sm object-cover"
          />

          {/* Content */}
          <div className="flex flex-col gap-1 items-start w-full">
            <h2 className="text-sm font-semibold text-gray-800">
              {itemm.title}
            </h2>

            <p className="text-[#B6AE9F] text-sm">
              <span className="text-[#D8C9A7] text-xs line-through">
                ₹{itemm.oldPrice}
              </span>{" "}
              <span className="font-bold text-black">₹{itemm.price}</span>
              <span className="text-xs text-black opacity-60 font-normal">
                {" "}
                {itemm.desc}
              </span>
            </p>

            <button className="bg-[#8A7650] w-full text-white px-6 py-2 rounded-lg text-sm font-medium mt-3 hover:opacity-90">
              Explore
            </button>
          </div>
        </div>
      ))}
    </div>


        </div>
    )
}
export default GiftPage;