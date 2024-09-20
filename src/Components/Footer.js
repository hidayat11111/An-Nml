import React from "react";
import instagram from "./../Images/instagram.png";
import facebook from "./../Images/facebook.png";
import Youtube from "./../Images/Youtube.png";
import location from './../Images/location.png';
import envelope from './../Images/envelope.png';
import telephone from './../Images/telephone.png';
import { Link } from "react-router-dom";
const Footer=()=>{
    return(
        <div className="w-full bg-[#EAE4DD] h-auto mt-28 flex flex-col  items-center pt-8 xl:pt-16 pb-6 ">
        <div className="xl:w-[90%] flex flex-row justify-evenly flex-wrap">
        <div className="flex flex-row gap-4 xl:gap-14">
          <div className="flex flex-col gap-3">
            <p className="font-sans font-semibold text-xl pl-2.5 text-DarkBlack">Follow us</p>
            <div className="flex flex-row justify-evenly flex-wrap gap-3 xl:gap-7 ">
              <Link>
                <div className="bg-[#C0C0C0] rounded-full p-2">
                  <img
                    src={Youtube}
                    className=" w-8 bg-[#ffffff] rounded-2xl p-0.5"
                    alt="error"
                  />
                </div>{" "}
              </Link>
              <Link>
                <div className="bg-[#C0C0C0]  rounded-full p-2">
                  <img
                    src={instagram}
                    className=" w-8 bg-[#ffffff] rounded-2xl p-0.5"
                    alt="error"
                  />
                </div>
              </Link>
              <Link>
                <div className="bg-[#C0C0C0]  rounded-full p-2">
                  <img
                    src={facebook}
                    className="w-8 bg-[#ffffff] rounded-2xl p-0.5"
                    alt="error"
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <li className="font-sans font-semibold text-DarkBlack opacity-90">About Us</li>
            <li className="font-sans font-semibold text-DarkBlack opacity-90" >Programes</li>
            <li className="font-sans font-semibold text-DarkBlack opacity-90" >Services</li>
            <li className="font-sans font-semibold text-DarkBlack opacity-90" >Doctors</li>
            
          </div>

          </div>

          <div className="flex flex-col gap-3 " >

         <p className="text-DarkBlack font-sans font-semibold text-xl">Get In Touch</p>
         <div className="flex flex-row items-center gap-1"><img src={location} className="w-6" alt=""/><p className="font-sans text-sm  text-DarkBlack opacity-90">Add: Jewbrara Near Pandov Park Awantipora-192122</p></div>
         <div  className="flex flex-row items-center gap-1.5" ><img src={envelope} className="w-6" alt=""/><p className="font-sans text-sm  text-DarkBlack opacity-90" > Email: sheikhMudhat@gmail.com</p></div>
         <div  className="flex flex-row items-center gap-1.5" ><img src={telephone} className="w-6" alt=""/><p className="font-sans text-sm text-DarkBlack opacity-90" >Phone: 7889312300</p></div>

          </div>

        </div>


        <div className="w-full flex flex-col items-center opacity-50 mt-6">
        <hr className="w-full text-DarkBlack opacity-50" />
      </div>

        <div className=" w-[85%] xl:w-[70%] flex flex-row justify-evenly gap-9  mt-3">


   <p className="font-sans font-normal text-xs xl:text-sm ">@ 2020 BHM HOSPITAL. All Rights Reserved.</p>
   <p className="font-sans font-normal text-xs  xl:text-sm ">Read Terms & Conditions</p>
   {/* <p className="font-sans font-normal text-xs  xl:text-sm ">Health Information Policy</p> */}
        </div>
      </div>
    )
}
export default Footer;