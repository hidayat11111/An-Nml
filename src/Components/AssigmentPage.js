
import React from "react";
import LooseSheet from "./../Images/LooseSheet.jpg";
import Model from "./../Images/Model.jpeg";
import Posters from "./../Images/Posters.jpeg";
import Practical from "./../Images/Practical.jpg";
import Ignou from "./../Images/Ignou.jpeg";
import Digital from "./../Images/Digital.png";
import Colle from "./../Images/colle.jpeg";
import Flashcards from "./../Images/Flashcards.jpeg";
import Clay from "./../Images/Clay.jpeg";
import Chart from "./../Images/Chart.jpeg";
import cart from "./../Images/cart.png";
import whishlist from "./../Images/whishlist.png";
import Logo from "./../Images/Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";


const AssigmentPage=()=>{
    const [isOpen, setIsOpen] = useState(false);


    
const products = [
    {
      id: 1,
      title: "Loose Sheet Work",
      price: 250,
      oldPrice: 304,
      desc: "/ 10 pages",
     image: LooseSheet,
      offer: "18% Off",
    },
    {
      id: 2,
      title: "Model Work",
      price: 300,
      oldPrice: 375,
      desc: "/ per model",
       image: Model,
      offer: "20% Off",
    },
    {
      id: 3,
      title: "Flash Cards",
      price: 250,
      oldPrice: 312,
      desc: "/ 10 cards",
       image: Flashcards,
      offer: "20% Off",
    },
    {
      id: 4,
      title: "Chart Work",
      price: 150,
      oldPrice: 187,
      desc: "/ per chart",
      image: Chart,
      offer: "20% Off",
    },
    {
      id: 5,
      title: "Practical Notebooks",
      price: 250,
      oldPrice: 320,
      desc: "/ per notebook",
      image: Practical,
      offer: "22% Off",
    },
    {
      id: 6,
      title: "Digital Assignments",
      price: 250,
      oldPrice: 300,
      desc: "/ Per assignment",
      image: Digital,
      offer: "17% Off",
    },
    {
      id: 7,
      title: "IGNOU Assignments",
      price: 120,
      oldPrice: 150,
      desc: "/ per subject",
      image: Ignou,
      offer: "20% Off",
    },
    {
      id: 8,
      title: "Clay Work",
      price: 350,
      oldPrice: 437,
      desc: "/ per model",
      image: Clay,
      offer: "20% Off",
    },
    {
      id: 9,
      title: "Cardboard Posters",
      price: 200,
      oldPrice: 244,
      desc: "/ per poster",
      image: Posters,
      offer: "18% Off",
    },
    {
      id: 10,
      title: "Colleagues",
      price: 300,
      oldPrice: 360,
      desc: "/ per Colleague",
      image: Colle,
      offer: "18% Off",
    },
  ];
   const navLinks = [
    { path: "/landing", label: "Home" },
    { path: "/", label: "Categories" },
    { path: "/", label: "Offers" },
    { path: "/about", label: "About Us" },
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
  xl:grid-cols-4
  gap-9
  px-4 sm:px-6
  w-[90%]
  mt-28
"
    >
      {products.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-[inset_0_2px_6px_rgba(0,0,0,0.1)] py-4 px-3.5 flex flex-col items-start gap-3 relative transform transition duration-300 hover:scale-105"
        >
          {/* Offer */}
          <button className="absolute top-7 left-5 bg-[#bbaa89] text-white px-3 py-1 rounded-md text-xs font-medium">
            {item.offer}
          </button>

          {/* Fav */}
          <div className="w-5 absolute top-5 right-5 cursor-pointer">
            {/* <img src={fav} alt="fav" /> */}
          </div>

          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-32 rounded-lg object-cover"
          />

          {/* Content */}
          <div className="flex flex-col gap-1 items-start w-full">
            <h2 className="text-sm font-semibold text-gray-800">
              {item.title}
            </h2>

            <p className="text-[#B6AE9F] text-sm">
              <span className="text-[#D8C9A7] text-xs line-through">
                ₹{item.oldPrice}
              </span>{" "}
              <span className="font-bold text-black">₹{item.price}</span>
              <span className="text-xs text-black opacity-60 font-normal">
                {" "}
                {item.desc}
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
export default AssigmentPage;