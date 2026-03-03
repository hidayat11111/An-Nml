import React from "react";
// import appointment from "./../Images/appointment.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./../Images/Logo.png";
import cart from "./../Images/cart.png";
import whishlist from "./../Images/whishlist.png";
const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
 const navLinks = [
    { path: "/landing", label: "Home" },
    { path: "/", label: "Categories" },
    { path: "/", label: "Offers" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  
  return (
    <div>
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

      <section className="bg-white dark:bg-gray-900 h-svh xl:h-auto pt-24  ">
        <div className="px-4 mx-auto max-w-screen-md flex flex-col gap-3 ">
          <div className="flex flex-row gap-2 justify-center items-center">
            {" "}
            {/* <img className="w-8 h-9" src={appointment} alt="error" />{" "} */}
            <h2 className=" font-sans text-2xl xl:text-4xl tracking-tight font-extrabold text-darkGreen dark:text-white">
              {" "}
              Contact Us
            </h2>
          </div>
          <p className="font-light text-center font-sans text-DarkBlack opacity-70 text-sm sm:text-xl">
           Get in touch for assignments, gifts, and custom creations
          </p>
          <form action="#" className="space-y-8 mt-4">
            <div>
              <label
                for="email"
                className=" font-sans block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="email"
                className=" font-sans shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="enter your name"
                required
              />
            </div>
              

              <div>
              <label
                for="email"
                className=" font-sans block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="email"
                className=" font-sans shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="enter your number"
                required
              />
            </div>


            <div>
              <label
                for="countries"
                className=" font-sans block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select the Doctor
              </label>
              <select
                id="countries"
                className=" font-sans bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected className="font-sans">
                  Choose a doctor
                </option>
                <option className="font-sans" value="gb">
                  Dr. Tajamul Islam(Neonatology)
                </option>
                <option className="font-sans" value="nou">
                  Dr. Nousheen (Gynecologist)
                </option>
                <option className="font-sans" value="ir">
                  Dr. Irfan Ahmad Bhat (Cardiologist)
                </option>
                <option className="font-sans" value="ma">
                  Dr. Manzoor Ahmad (Urologist,Dermatology)
                </option>
                <option className="font-sans" value="ma">
                  Dr. Mushtaq Saif (Diabetic Expert)
                </option>
                <option className="font-sans" value="ma">
                  Dr. Shakeel ahmad (Ortho)
                </option>
                <option className="font-sans" value="ma">
                  Dr. Salman Khursheed (ENT,Head & Neck Surgeon)
                </option>
                <option className="font-sans" value="ma">
                  Dr. Muzaffar Ahangar (Laproscopic surgen)
                </option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                class=" font-sans block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Write something about your health
              </label>
              <textarea
                id="message"
                rows="6"
                class=" font-sans block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="py-2.5 px-5 text-sm font-normal text-center text-white rounded-lg bg-darkGreen sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
export default Contact;
