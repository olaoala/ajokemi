import React from 'react';
import image from '../Assets/image.png';
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowRoundDown } from "react-icons/io";

function Landing() {
  return (
    <div className=" bg-gray relative h-screen bg-blue-500">
      <main className="flex items-center justify-center w-full h-full">
        <img src={image} alt="Transparent" className=" h-full" />
      
        <div className="absolute top-2/4 transform -translate-y-2/3 w-full flex justify-between ">
        <h2 className="text-4xl text-white p-5">Software <br /> Engineer, Tech babe <br /> extraordinaire.</h2>
          <div className="flex space-x-4 items-center">
            <span className="bg-blue h-16 flex items-center text-xl p-3  rounded-l-full hover:w-20">
              <CiGlobe />
            </span>
          </div>
        </div>

        <div className="absolute flex justify-between bottom-20 w-full text-right p-5">
        <span className="text-white animate-bounce text-6xl"><IoIosArrowRoundDown /></span>
          <h1 className="text-4xl text-white">Babalola Wuraola Ajoke</h1>
        </div>
      </main>
    </div>
  );
}

export default Landing;
