import React from "react";
import Lottie from "lottie-react";
import splash from './../Splash.json';
import Logo from "./../Images/Logo.png";
import { motion } from "framer-motion";
import {  useNavigate } from "react-router-dom";
import { useEffect } from "react";
const StartPage=()=>{
    const nav = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            nav("/landing");
          }, 4500);
      
         
          return () => clearTimeout(timer);
    }, [nav]);
    
    return(

        <div
        className=" h-svh w-full flex flex-row justify-center items-center gap-1"
  
        // style={{ backgroundImage: `url(${strt1}),url(${strt2})` }}
      >
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
animate={{ opacity: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
transition={{
  duration: 3, // Increased duration to 3 seconds
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
  times: [0, 0.2, 0.4, 0.6, 0.8, 1], // Adjusted times for the added steps
}}
        >
        <div className="flex flex-row gap-2 items-center">
           <img className="w-20" id="logo" src={Logo} alt="" /> 
          <p className=" text-center font-sans font-medium text-2xl opacity-85 hidden xl:block">
          Customized By Tabish
          </p>
          </div>
          <Lottie className="w-[15%]" animationData={splash} loop={true} />
        </motion.div>
  
  
  
      </div>


    )
}
export default StartPage;