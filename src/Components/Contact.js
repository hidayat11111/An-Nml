import React from "react";
// import appointment from "./../Images/appointment.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./../Images/Logo.png";
import cart from "./../Images/cart.png";
import whishlist from "./../Images/whishlist.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast , Slide} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
  e.preventDefault();

  
    emailjs
      .sendForm(
        "service_h6uxxa9", // your service ID
        "template_2boqy37", // replace this
        form.current,
        "cENJ8Yr78McNgjQEa" // replace this
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully.");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          toast.error("Something went wrong ❌");
          console.log(error);
        }
      );
  };
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

      <section className="bg-white dark:bg-gray-900 h-svh xl:h-auto pt-24  ">
        <div className="px-4 mx-auto max-w-screen-md flex flex-col gap-0">
          <div className="flex flex-row gap-2 justify-center items-center">
            {" "}
            {/* <img className="w-8 h-9" src={appointment} alt="error" />{" "} */}
            <h2 className=" font-sans text-2xl xl:text-4xl tracking-tight font-extrabold text-darkGreen dark:text-white">
              {" "}
              Contact Us
            </h2>
          </div>
          <p className="font-light text-center font-sans text-DarkBlack opacity-70 text-sm  sm:text-base">
            Get in touch for assignments, gifts, and custom creations
          </p>
          <form ref={form} onSubmit={sendEmail} className="space-y-8 mt-6">
            <div>
              <label
                for="email"
                className=" font-sans block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
              name="name"
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
                name="phone"
                type="number"
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
                What do you need ?
              </label>
              <select
                name="service"
                id="countries"
                className=" font-sans bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#8A7650] focus:border-[#8A7650] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#8A7650] dark:focus:border-[#8A7650]"
              >
                <option selected className="font-sans">
                  Select
                </option>
                <option className="font-sans" value="gb">
                  Assignment
                </option>
                <option className="font-sans" value="nou">
                  Charts
                </option>
                <option className="font-sans" value="ir">
                  Gift Items
                </option>
                <option className="font-sans" value="ma">
                  Deen Essentials
                </option>
                <option className="font-sans" value="ma">
                  Custom Order
                </option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                class=" font-sans block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Description
              </label>
              <textarea
                 name="message"
                id="message"
                rows="6"
                class=" font-sans block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="..."
              ></textarea>
            </div>
             <button
          type="submit"
          disabled={loading}
          className="bg-[#8A7650] text-white rounded-lg py-2 px-2.5 flex justify-center items-center"
        >
          {loading ? (
            <div className="border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Send Message"
          )}
        </button>
          </form>
          <ToastContainer
             position="top-right"
  autoClose={2500}
  hideProgressBar={false}
  transition={Slide}
 
/>
        </div>
      </section>

      <div className="w-[50%] h-[10vh] bg-[#ffffff]"></div>
    </div>
  );
};
export default Contact;
