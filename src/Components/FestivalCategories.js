import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../Images/Logo.png";
import cart from "./../Images/cart.png";
import whishlist from "./../Images/whishlist.png";
// import Jewellery from "./../Images/jewelry.png";
// import Hmaper from "./../Images/Hamper.png";
// import candle from "./../Images/cand.png";
// import Boqi from "./../Images/bouquet.png";
// import chains from "./../Images/chocolate.png";
import Mehdi from "./../Images/mehdi.jpg";

const FestivalCategories = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/landing", label: "Home" },
    { path: "/", label: "Categories" },
    { path: "/", label: "Offers" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  const giftItems = [
    { name: "Mehendi", path: "/mehdi", img:Mehdi },
    // { name: "Bouquets", path: "/bouquet", img: Boqi },
    // { name: "Jewellery", path: "/Jewellery", img: Jewellery },
    // { name: "Hampers", path: "/hamper", img: Hmaper },
    // { name: "Candles", path: "/candles", img: candle },
    // { name: "Customized chocolates", path: "/Choclates", img: chains },
  ];

  return (
    <div>
      {/* NAVBAR */}
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

      {/* GIFT CATEGORY SECTION */}
      <section className="max-w-screen-xl mx-auto mt-24 px-4 min-h-[70vh] flex flex-col justify-center items-center pb-12">
        <div className="flex flex-col gap-1 mt-2 mb-10 items-center ">

            <h2 className="font-sans text-2xl xl:text-4xl tracking-tight font-extrabold text-darkGreen">
          Festival Categories
        </h2>
        <p className="opacity-90">Perfect picks for every celebration</p>

        </div>
        

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-16 place-items-center">

          {giftItems.map((item) => (
            <Link to={item.path} key={item.name} className="w-full flex justify-center">

           <div className="w-72 h-52 bg-gradient-to-br from-[#f5f5f5] to-[#ffffff] rounded-xl shadow-md hover:shadow-xl hover:scale-105 duration-300 cursor-pointer flex flex-col items-center justify-center gap-3 p-3">

  <div className="w-28 flex items-center justify-center">
    <img
  src={item.img}
  alt={item.name}
  className="w-[60%] h-full "
/>

    
  </div>

  <div className="flex items-center justify-center">
  <p className="text-[17px] font-semibold text-[#8A7650] opacity-70  tracking-wide">
    {item.name}
  </p>
</div>

</div>

            </Link>
          ))}

        </div>

      </section>

    </div>
  );
};

export default FestivalCategories;