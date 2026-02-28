import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./../Images/Logo.png";
import Poster from "./../Images/Poster.png";
import Gift from "./../Images/gift.png";
import Assigments from "./../Images/Assigments.jpg";
import salah from "./../Images/Salah.jpg";
import Footer from "./Footer";

import cart from "./../Images/cart.png";
import whishlist from "./../Images/whishlist.png";
// import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import surprise from "./../Images/surprise.png";
import Exper from "./../Images/Exper.png"
import Smart from "./../Images/Smart.png"
import product from "./../Images/product.png";
import achievement from "./../Images/achievement.png";
import WebPoster from "./../Images/WebPoster.png";

import Model from "../Images/Model.jpeg";
import Flashcards from "../Images/Flashcards.jpeg";
import Chart from "../Images/Chart.jpeg";
import Practical from "../Images/Practical.jpg";
import Clay from "../Images/Clay.jpeg";
import LooseSheet from "../Images/LooseSheet.jpg"
import User12 from "./../Images/User12.png"
import whatsapp from "./../Images/whatsapp.png"


const LandingPage = () => {

const reviews = [
  {
    id: 1,
    name: "Zehra Farooq",
    image: User12,
    rating: 5,
    text: "i honestly can't thank you enough it looks incredible. well you took a huge weight off my shoulders. it is just brilliant thank you ",
  },
  {
    id: 2,
    name: "Madiha",
    image: User12,
    rating: 4,
    text: "A literal 10 on 10 remarks to this service provided by tabish mushtaq,no tantrums no late work nthing, everything on time and yeah the work is so neat ",
  },
  {
    id: 3,
    name: "Zainab",
    image: User12,
    rating: 5,
    text: "Absolutely thrilled with this It's even better than I expected. Looking forward to shopping with you again",
  },
  {
    id: 4,
    name: "Shah Farhana",
    image: User12,
    rating: 5,
    text: "This is a brilliant and highly effective visual representation of water conservation. You have successfully broken down a complex environmental process into simple, easy-to-understand stages.",
  },
  {
    id: 5,
    name: "Hina Tabasum",
    image: User12,
    rating: 4,
    text: "Got my assignment and charts done quickly. Thanxx so much for these beautiful projects deaI am sersly very happy",
  },
  {
    id: 6,
    name: "Zoya Ali",
    image: User12,
    rating: 5,
    text: "Excellent work on gift items and charts. The details, colors, and finishing were perfect and made my project stand out.",
  },
];

   const products = [
    {
      id: 1,
      title: "Loose Sheet Work",
      price: 250,
      oldPrice: 300,
      desc: "/ 10 pages",
      image: LooseSheet,
      offer: "20% Off",
    },
    {
      id: 2,
      title: "Model Work",
      price: 350,
      oldPrice: 400,
      desc: "/ per model",
      image: Model,
      offer: "15% Off",
    },
    {
      id: 3,
      title: "Flash Cards",
      price: 200,
      oldPrice: 250,
      desc: "/ 10 cards",
      image: Flashcards,
      offer: "18% Off",
    },
    {
      id: 4,
      title: "Chart Work",
      price: 150,
      oldPrice: 200,
      desc: "/ per chart",
      image: Chart,
      offer: "25% Off",
    },
    {
      id: 5,
      title: "Practical Notebook",
      price: 300,
      oldPrice: 350,
      desc: "/ notebook",
      image: Practical,
      offer: "10% Off",
    },
    {
      id: 6,
      title: "Clay Model",
      price: 400,
      oldPrice: 450,
      desc: "/ per model",
      image: Clay,
      offer: "12% Off",
    },
  ];






  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false, // animation only once
    });
  }, []);
  const [isOpen, setIsOpen] = useState(false);
 

  const navLinks = [
    { path: "/landing", label: "Home" },
    { path: "/", label: "Categories" },
    { path: "/", label: "Offers" },
    { path: "/about", label: "About Us" },
    { path: "/Doctors", label: "Contact Us" },
  ];

  return (
    <div className="w-full">
      {/* ================= NAVBAR ================= */}
    <section className="fixed w-full top-0 left-0 z-50 bg-[#F1F0E9]">

  {/* NAVBAR */}
  <nav className="flex items-center justify-between w-full max-w-screen-xl mx-auto px-4 py-2.5">

    {/* Logo */}
    <img src={Logo} className="w-12" alt="logo" />

    {/* Desktop Nav Links */}
    <div className="hidden md:flex justify-center flex-grow">
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

      {/* ================= HERO / POSTER ================= */}
 <section className="pt-[4rem] mt-0 xl:mt-20 px-0 xl:pt-18">
  <div className="flex items-center justify-center">

    {/* Mobile Image */}
    <img
      src={Poster}
      alt="mobile poster"
      className="block xl:hidden w-full h-auto object-contain"
    />

    {/* Web Image */}
   <img
  src={WebPoster}
  alt="web poster"
  className="hidden xl:block xl:w-full xl:h-svh object-cover"
/>

  </div>
</section>
      {/* ================= DIVIDER ================= */}
      <div className="w-full flex justify-center mt-12 xl:mt-20">
        <hr className="w-10/12 opacity-50" />
      </div>

      {/* ================= EXPLORE SECTION ================= */}
      <section
        data-aos="fade-up"
        className="mt-12 xl:mt-20 flex flex-col items-center gap-12 px-4"
      >
        <h2 className="text-3xl xl:text-4xl font-medium text-DarkBlack text-center">
          Explore What We Offer
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {/* Card */}
          <div className="flex flex-col items-center gap-3 w-56">
            <div className="border-2 border-[#f6f0d7] rounded-full w-36 h-36 flex items-center justify-center">
              <img src={Gift}  alt="error" className="w-20 object-contain" />
            </div>
           <Link to="/GiftPage">   <p className="text-lg text-DarkBlack opacity-70">Gift Items</p> </Link> 
          </div>

          {/* Card */}
          <div className="flex flex-col items-center gap-3 w-56">
            <div className="border-2 border-[#f6f0d7] rounded-full w-36 h-36 flex items-center justify-center">
              <img src={Assigments}  alt="error" className="w-20 object-contain" />
            </div>
          <Link to="/AssigmentPage"> <p className="text-lg text-DarkBlack opacity-70">Assignments</p></Link>
          </div>

          {/* Card */}
          <div className="flex flex-col items-center gap-3 w-56">
            <div className="border-2 border-[#f6f0d7] rounded-full w-36 h-36 flex items-center justify-center">
              <img src={salah}  alt="error" className="w-20 object-contain" />
            </div>
        <Link to="/Deen"><p className="text-lg text-DarkBlack opacity-70">Deen Essentials</p></Link>
          </div>
        </div>
      </section>

      {/* ================= DIVIDER ================= */}
      <div className="w-full flex justify-center mt-12 xl:mt-20">
        <hr className="w-10/12 opacity-50" />
      </div>

 <section className="mt-10 w-full xl:w-[85%] mx-auto px-4 xl:px-0">

      {/* Heading */}
      <h2 className="text-xl xl:text-2xl font-semibold text-gray-800 mb-6">
       Most Requested Work
      </h2>

      {/* Scroll Row */}
      <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar-web">

        {products.map((item) => (
          <div
            key={item.id}
            className="min-w-[200px] bg-[#F6F5F2] rounded-xl p-3 shadow-sm hover:shadow-md transition"
          >

            {/* Image */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-28 object-cover rounded-lg"
              />

              <span className="absolute top-2 left-2 bg-[#BBAA89] text-white text-[10px] px-2 py-0.5 rounded">
                {item.offer}
              </span>
            </div>

            {/* Content */}
            <div className="mt-3">
              <h3 className="text-sm font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                <span className="line-through text-[#CFC6B4] mr-1">
                  ₹{item.oldPrice}
                </span>
                <span className="font-bold text-black text-sm">
                  ₹{item.price}
                </span>
                <span className="ml-1">{item.desc}</span>
              </p>

              <button className="mt-3 w-full bg-[#8A7650] text-white py-1.5 rounded-lg text-sm font-medium hover:opacity-90">
                Explore
              </button>
            </div>

          </div>
        ))}

      </div>
    </section>

    

      {/* ================= WHY CHOOSE US ================= */}
      {/* ================= WHY CHOOSE US ================= */}
      <section
        data-aos="zoom-in"
        className=" w-full mt-16 xl:mt-15 px-4 xl:px-10 flex flex-col items-center xl:flex-col gap-12 xl:gap-12"
      >
        {/* LEFT */}
        <div className="xl:w-1/2 flex flex-col gap-4 justify-center items-center">
        

               <div className="flex items-center justify-center gap-3">
  
  {/* Vertical Line */}
  <div className="w-[3px] h-10 bg-[#8A7650] rounded-full"></div>

  {/* Heading */}
  <h2 className="text-2xl xl:text-4xl font-semibold text-gray-800">
     Why Choose Us ?
  </h2>

</div>

        
        


          <p className="text-DarkBlack opacity-60 max-w-lg text-center">
            We customize all your thoughts .Your satisfaction is our priority !
          </p>
        </div>

        {/* RIGHT */}
        <div className="xl:w-[70%]">
          {/* MOBILE → stacked */}
          <div className="flex flex-col gap-4 xl:hidden">
            <div className="bg-[#ECECEC]  p-4 rounded-lg">
              <img src={achievement} alt="error" className=" bg-[#ffffff] w-12 mb-3 p-2 rounded-full"  />
              <p className="font-medium">Thoughtfully Designed Products</p>
              <p className="text-sm opacity-80">
                Carefully crafted assignments and gifts made with purpose.
              </p>
            </div>

            <div className="bg-[#ECECEC]  p-4 rounded-lg">
              <img src={Smart} alt="error" className=" bg-[#ffffff] w-12 mb-3 p-2 rounded-full"  />
              <p className="font-medium">Customization That Matters</p>
              <p className="text-sm opacity-80">
                Personalized gifts tailored with elegance and care.
              </p>
            </div>

            <div className="bg-[#ECECEC]  p-4 rounded-lg">
              <img src={surprise}  alt="error" className=" bg-[#ffffff] w-12 mb-3 p-2 rounded-full"  />
              <p className="font-medium">Built for Consistency</p>
              <p className="text-sm opacity-80">
                Track prayers and stay disciplined daily.
              </p>
            </div>

            <div className="bg-[#ECECEC]  p-4 rounded-lg">
              <img src={Exper}  alt="error" className=" bg-[#ffffff] w-12 mb-3 p-2 rounded-full"  />
              <p className="font-medium">Quality You Can Trust</p>
              <p className="text-sm opacity-80">
                Clean design and practical layouts for daily use.
              </p>
            </div>

            <div className="bg-[#ECECEC]  p-4 rounded-lg">
              <img src={product}  alt="error" className=" bg-[#ffffff] w-12 mb-3 p-2 rounded-full"  />
              <p className="font-medium">Perfect for Families</p>
              <p className="text-sm opacity-80">
                Designed for both kids and adults.
              </p>
            </div>
          </div>

          {/* DESKTOP → grid cards */}
          <div className="hidden xl:flex flex-col items-center gap-10">
            {/* Row 1 → 3 Cards */}
            <div className="flex justify-center gap-10">
              <div className="w-[50%] bg-[#ECECEC] p-5 rounded-xl hover:shadow-md transition flex flex-col">
              <img src={achievement} alt="error" className=" bg-[#ffffff] w-12 mb-3 p-2 rounded-full" />
                
                <p className="font-medium mb-1">Quality You Can Trust</p>
                <p className="text-sm opacity-60 flex-grow">
                  Clean design and practical layouts for daily use.
                </p>
              </div>

              <div className="w-[50%] bg-[#ECECEC] p-5 rounded-xl hover:shadow-md transition flex flex-col">
                <img src={Smart}  alt="error" className=" bg-[#ffffff] w-12 mb-3 p-2 rounded-full"  />
                <p className="font-medium mb-1">Smart Assignments</p>
                <p className="text-sm opacity-60 flex-grow">
                  Well-structured assignments that help in learning, growth, and consistency.
                </p>
              </div>
              <div className="w-[50%] bg-[#ECECEC] p-5 rounded-xl hover:shadow-md transition flex flex-col">
                <img src={surprise}  alt="error" className=" bg-[#ffffff] w-12 mb-3 p-2 rounded-full"  />
                <p className="font-medium mb-1">Customized Gift Items</p>
                <p className="text-sm opacity-60 flex-grow">
             Personalized gifts crafted to match your needs and special moments.
                </p>
              </div>
            </div>

            {/* Row 2 → 2 Cards (centered) */}
            <div className="flex justify-center gap-10 w-[70%] items-center">
              <div className="w-[50%] bg-[#ECECEC] p-5 rounded-xl hover:shadow-md transition flex flex-col">
                <img src={Exper}  alt="error" className=" bg-[#ffffff] w-12 mb-3 p-2 rounded-full"  />
                <p className="font-medium mb-1">Personalized Experience</p>
                <p className="text-sm opacity-60 flex-grow">
                 Tailored products designed to match your unique needs, crafted with attention to detail and purpose.
                </p>
              </div>

              <div className="w-[50%] bg-[#ECECEC]  p-5 rounded-xl hover:shadow-md transition flex flex-col">
                <img src={product}  alt="error" className=" bg-[#ffffff] w-12 mb-3 p-2 rounded-full"  />
                <p className="font-medium mb-1">Thoughtful Products</p>
                <p className="text-sm opacity-60 flex-grow">
                 Carefully designed assignments, gifts, and trackers made with purpose and meaning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="mt-16 w-full xl:w-[80%] mx-auto px-4 xl:px-0">

  {/* Heading */}
  <div className="flex items-center justify-center gap-3 mb-12">
    <div className="w-[3px] h-10 bg-[#8A7650] rounded-full"></div>
    <h2 className="text-2xl xl:text-4xl font-semibold text-gray-800 text-center">
      What Our Clients Say
    </h2>
  </div>

  {/* OUTER LOCK */}
  <div className="w-full overflow-hidden">

    {/* INNER TRACK */}
    <div className="flex gap-4 animate-scroll w-max">

      {[...reviews, ...reviews].map((item, index) => (
        <div
          key={index}
          className="w-[200px] sm:w-[220px] h-[200px] bg-[#F6F5F2] rounded-xl p-4 shadow-sm shrink-0"
        >

          <div>
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <h3 className="text-sm font-semibold text-gray-800">
                {item.name}
              </h3>
            </div>

            <div className="flex mt-2 text-[#BBAA89] text-sm">
              {"★".repeat(item.rating)}
              {"☆".repeat(5 - item.rating)}
            </div>

            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              "{item.text}"
            </p>
          </div>

        </div>
      ))}

    </div>
  </div>
</section>

<a
  href="https://wa.me/916006497218"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 
             bg-[#000000]
             text-white px-4 py-3 rounded-full 
             flex items-center gap-2 z-50 
             transition hover:scale-105"
>
  <img src={whatsapp} className="w-6 h-6 object-contain" alt="WhatsApp" />
  <span className="text-sm font-medium">whatsapp</span>
</a>
<p>hii</p>

 <Footer/>
      {/* ================= FOOTER ================= */}
      {/* * <div className="">
        <Footer />
      


      </div>  */}





    </div>
  );
};

export default LandingPage;
