import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../Images/Logo.png";
import cart from "./../Images/cart.png";
import whishlist from "./../Images/whishlist.png";
import jew1 from "./../Images/jew1.jpeg"
import jew2 from "./../Images/jew2.jpeg"
import jew3 from "./../Images/jew3.jpeg"
import jew4 from "./../Images/jew4.jpeg"
import jew5 from "./../Images/jew5.jpeg"
import jew6 from "./../Images/jew6.jpeg"
import jew7 from "./../Images/jew7.jpeg"
import jew8 from "./../Images/jew8.jpeg"
import jew9 from "./../Images/jew9.jpeg"
import jew10 from "./../Images/jew10.jpeg"
import jew11 from "./../Images/jew11.jpeg"
import jew12 from "./../Images/jew12.jpeg"
import jew13 from "./../Images/jew13.jpeg"
import jew14 from "./../Images/jew14.jpeg"
import jew15 from "./../Images/jew15.jpeg"
const JewelleryPage = ()=>{

  const [isOpen, setIsOpen] = useState(false);


  const Jeweller = [

   {
      id: 1,
      title: "Cartier bangles",
      price: 300,
      oldPrice: 375,
      desc: "/ per bangle",
      image: jew1,
      offer: "20% Off",
    },
    {
      id: 2,
      title: "Cartier bangles",
      price: 350,
      oldPrice: 437,
      desc: "/ per bangle",
      image: jew2,
      offer: "18% Off",
    },
      {
      id: 3,
      title: "Cartier bangles",
      price: 350,
      oldPrice: 437,
      desc: "/ per bangle",
      image: jew3,
      offer: "20% Off",
    },
      {
      id: 4,
      title: "Cartier bangles",
      price: 350,
      oldPrice: 437,
      desc: "/ per bangle",
      image: jew4,
      offer: "22% Off",
    },
     {
      id: 5,
      title: "Cartier bangles",
      price: 300,
      oldPrice: 375,
      desc: "/ per bangle",
      image: jew5,
      offer: "20% Off",
    },
     {
      id: 6,
      title: "Cartier bangles",
      price: 350,
      oldPrice: 437,
      desc: "/ per bangle",
      image: jew6,
      offer: "20% Off",
    },
     {
      id: 7,
      title: "Anti tarnished necklace",
      price: 350,
      oldPrice: 437,
      desc: "/ per necklace",
      image: jew7,
      offer: "20% Off",
    },
 
    {
      id: 8,
      title: "Butterfly rings",
      price: 220,
      oldPrice: 275,
      desc: "/ per ring",
     image: jew8,
      offer: "20% Off",
    },
       {
      id: 9,
      title: "Anti tarnished rings",
      price: 150,
      oldPrice: 187,
      desc: "/ per ring ",
       image: jew9,
      offer: "20% Off",
    },
   
    
    {
      id: 10,
      title: "Anti tarnished necklace",
      price: 220,
      oldPrice: 275,
      desc: "/ per necklace ",
       image: jew11,
      offer: "20% Off",
    },
    {
      id: 11,
      title: "Rings",
      price: 220,
      oldPrice: 275,
      desc: "/ per ring ",
       image: jew12,
      offer: "20% Off",
    },
    {
      id: 12,
      title: "Rings",
      price: 50,
      oldPrice: 62,
      desc: "/ per ring ",
       image: jew13,
      offer: "20% Off",
    },
    {
      id: 13,
      title: "Black clover bracelet",
      price: 300,
      oldPrice: 375,
      desc: "/ per bracelet ",
       image: jew14,
      offer: "20% Off",
    },
    {
      id: 14,
      title: "Jumkas",
      price: 200,
      oldPrice: 250,
      desc: "/ per candle ",
       image: jew15,
      offer: "20% Off",
    },
    {
      id: 15,
      title: "Silver Rings",
      price: 150,
      oldPrice: 187,
      desc: "/ per ring ",
       image: jew10,
      offer: "20% Off",
    },
 
   
    
  ];

  const navLinks = [
    { path: "/landing", label: "Home" },
    { path: "/", label: "Categories" },
    { path: "/", label: "Offers" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

    return(
   <div className="flex flex-col items-center">

    <section className="fixed w-full top-0 left-0 right-0 z-50 bg-[#F1F0E9]">
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
              <img src={whishlist} className="w-5" alt="wishlist" />
              <img src={cart} className="w-5" alt="cart" />
              <button className="bg-[#8A7650] text-white rounded-lg px-3 py-1.5 text-sm">
                Login
              </button>
            </div>

            {/* Mobile Right */}
            <div className="flex items-center gap-3 md:hidden">
              <img src={whishlist} className="w-5" alt="wishlist" />
              <img src={cart} className="w-5" alt="cart" />

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

      <div className="w-[90%] mt-28 mb-10 flex flex-col gap-1">
       
        <h2 className=" font-sans text-2xl xl:text-4xl tracking-tight font-extrabold text-darkGreen">
          Jewelleries
        </h2>
        <p className="opacity-90">Crafted to Sparkle, Designed to Impress</p>

      </div>

      

      <div
      className="
        grid 
        grid-cols-2 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        gap-9 md:gap-5 lg:gap-6
        md:px-0 sm:px-6
        w-[90%]
        mb-20
    
      "
    >
      {Jeweller.map((itemm) => (
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
export default JewelleryPage;