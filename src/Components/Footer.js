import React from "react";
import instagram from "./../Images/instagram.png";
import location from './../Images/location.png';
import envelope from './../Images/envelope.png';
import telephone from './../Images/telephone.png';
import { Link } from "react-router-dom";
import Logo from "./../Images/Logo.png";
import Face from "./../Images/Face.png"
const Footer=()=>{
    return(
       <div className="w-full bg-[#F1F0E9] mt-20 px-6 xl:px-16 py-10">

  {/* Top Section */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">



    {/* Column 1 - Social */}
    <div className="flex flex-col gap-2">

   <img src={Logo} alt="error" className="w-12"/>
   <div className="flex flex-col gap-2" >

      <p className="font-semibold text-lg text-DarkBlack">Follow Us</p>

      <div className="flex items-center gap-3">
        

        <Link to="https://www.instagram.com/an_naml_27?igsh=bjVhMWt6eWdjYW5v" >
          <div className="bg-[#8A7650] rounded-full p-2">
            <img src={instagram} alt="error" className="w-4" />
          </div>
        </Link>
         <Link>
          <div className="bg-[#8A7650] rounded-full p-2">
            <img src={Face} alt="error" className="w-4" />
          </div>
        </Link>

       </div>
      </div>
    </div>

    {/* Column 2 - Links */}
    <div className="flex flex-col gap-3">
      <p className="font-semibold text-xl text-[#000000]">Quick Links</p>

      <ul className=" text-sm flex flex-col gap-2 text-DarkBlack opacity-90">
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Offers</li>
        <li>Categories</li>
      </ul>
    </div>

    {/* Column 3 - Contact */}
    <div className="flex flex-col gap-4">
      <p className="font-semibold text-xl text-[#000000]">Get In Touch</p>

      <div className="flex items-center gap-2 text-sm text-DarkBlack opacity-90">
        <img src={location} alt="error" className="w-5" />
        <p>Lal Bazar near playground, Srinagar</p>
      </div>

      <div className="flex items-center gap-2 text-sm text-DarkBlack opacity-90">
        <img src={envelope} alt="error" className="w-5" />
        <p>Stabish909@gmail.com</p>
      </div>

      <div className="flex items-center gap-2 text-sm text-DarkBlack opacity-90">
        <img src={telephone} alt="error" className="w-5" />
        <p>7889312300</p>
      </div>
    </div>

  </div>

  {/* Divider */}
  {/* <div className="max-w-7xl mx-auto mt-8">
    <hr className="border-DarkBlack opacity-30" />
  </div> */}

  {/* Bottom */}
  

</div>

    )
}

export default Footer;
