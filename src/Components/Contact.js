// import React from "react";
// import appointment from "./../Images/appointment.png";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import Logo from "./../Images/Logo.png";
// const Contact = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navLinks = [
//     { path: "/landing", label: "Home" },
//     { path: "/about", label: "About" },
//     { path: "/services", label: "Services" },
//     { path: "/Doctors", label: "Doctors" },
//     { path: "/contact", label: "Contact" },
//   ];

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <section className="w-full fixed top-0 left-0 z-10 bg-[#EAE4DD]">
//         <nav className="flex items-center justify-between  bg-[#EAE4DD] w-full">
//           <img src={Logo} className="w-16" alt="error" />
//           <div className="px-5 xl:px-12 py-6 flex w-full items-center justify-between">
//             {/* Full Menu for Larger Screens */}
//             <div className="xl:flex flex-grow items-center justify-end">
//               <ul className="hidden md:flex pr-16 font-light font-heading space-x-12">
//                 {navLinks.map(({ path, label }) => (
//                   <Link to={path} key={label}>
//                     <p className=" text-DarkBlack opacity-85 font-sans font-medium text-sm bg-gradient-to-r from-slate-300 to-white bg-clip-text text-transparent hover:text-gray-800 hover:bg-none hover:underline">
//                       {label}
//                     </p>
//                   </Link>
//                 ))}
//               </ul>
//             </div>

//             {/* Burger Icon for Mobile View */}
//             <button
//               className="xl:hidden flex items-center space-x-5"
//               onClick={toggleMenu}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 hover:text-gray-200"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           <div
//             className={`py-4 fixed top-0 right-0 h-auto w-full text-white transition-transform transform ${
//               isOpen ? "translate-x-0 shadow-lg" : "translate-x-full"
//             } z-20 overflow-hidden`}
//             style={{
//               background:
//                 "linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)",
//               boxShadow: isOpen
//                 ? "0 4px 20px rgba(255, 255, 255, 0.4)"
//                 : "none",
//             }}
//           >
//             <button
//               className="absolute top-4 right-4 rounded-full text-2xl bg-lightGreen text-DarkBlack px-2.5 "
//               onClick={toggleMenu}
//               aria-expanded={isOpen}
//             >
//               &times;
//             </button>
//             <ul className="flex flex-col items-center p-5 space-y-4 max-h-[80vh] overflow-y-auto ">
//               <div className="flex flex-col gap-2.5">
//                 {navLinks.map(({ path, label }) => (
//                   <li key={label} className="list-none">
//                     <Link
//                       to={path}
//                       onClick={toggleMenu}
//                       className="font-sans font-normal text-sm bg-gradient-to-r from-slate-300 to-white bg-clip-text text-transparent hover:text-white hover:underline underline-offset-4 decoration-gray-500"
//                     >
//                       {label}
//                     </Link>
//                   </li>
//                 ))}
//               </div>
//             </ul>
//           </div>
//         </nav>
//       </section>

//       <section className="bg-white dark:bg-gray-900 h-svh xl:h-auto pt-24  ">
//         <div className="px-4 mx-auto max-w-screen-md flex flex-col gap-3 ">
//           <div className="flex flex-row gap-2 justify-center items-center">
//             {" "}
//             <img className="w-8 h-9" src={appointment} alt="error" />{" "}
//             <h2 className=" font-sans text-2xl xl:text-4xl tracking-tight font-extrabold text-darkGreen dark:text-white">
//               {" "}
//               Make an Appointment
//             </h2>
//           </div>
//           <p className="font-light text-center font-sans text-DarkBlack opacity-70 text-sm sm:text-xl">
//             Schedule an appointment with your doctor today for a thorough health
//             checkup.
//           </p>
//           <form action="#" className="space-y-8 mt-4">
//             <div>
//               <label
//                 for="email"
//                 className=" font-sans block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//               >
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 id="email"
//                 className=" font-sans shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//                 placeholder="enter your name"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 for="countries"
//                 className=" font-sans block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Select the Doctor
//               </label>
//               <select
//                 id="countries"
//                 className=" font-sans bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               >
//                 <option selected className="font-sans">
//                   Choose a doctor
//                 </option>
//                 <option className="font-sans" value="gb">
//                   Dr. Tajamul Islam(Neonatology)
//                 </option>
//                 <option className="font-sans" value="nou">
//                   Dr. Nousheen (Gynecologist)
//                 </option>
//                 <option className="font-sans" value="ir">
//                   Dr. Irfan Ahmad Bhat (Cardiologist)
//                 </option>
//                 <option className="font-sans" value="ma">
//                   Dr. Manzoor Ahmad (Urologist,Dermatology)
//                 </option>
//                 <option className="font-sans" value="ma">
//                   Dr. Mushtaq Saif (Diabetic Expert)
//                 </option>
//                 <option className="font-sans" value="ma">
//                   Dr. Shakeel ahmad (Ortho)
//                 </option>
//                 <option className="font-sans" value="ma">
//                   Dr. Salman Khursheed (ENT,Head & Neck Surgeon)
//                 </option>
//                 <option className="font-sans" value="ma">
//                   Dr. Muzaffar Ahangar (Laproscopic surgen)
//                 </option>
//               </select>
//             </div>
//             <div className="sm:col-span-2">
//               <label
//                 for="message"
//                 class=" font-sans block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
//               >
//                 Write something about your health
//               </label>
//               <textarea
//                 id="message"
//                 rows="6"
//                 class=" font-sans block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                 placeholder="..."
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               class="py-2.5 px-5 text-sm font-normal text-center text-white rounded-lg bg-darkGreen sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// };
// export default Contact;
