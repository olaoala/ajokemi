import React from 'react';
import image from '../Assets/image.png';
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowRoundDown } from "react-icons/io";

function Landing() {
  return (
    <div className="bg-gray relative h-screen bg-blue-500">
      <main className="flex items-center justify-center w-full h-full">
        <img src={image} alt="Transparent" className="h-full" />
      
        <div className="absolute top-2/4 transform -translate-y-2/3 w-full flex justify-between">
          <h2 className="text-4xl text-white p-5">
            Front-end <br /> Engineer, Tech babe <br /> extraordinaire.
          </h2>
          <div className="flex items-center bg-blue h-16  text-xl p-3 rounded-l-full hover:w-28 group relative">
            <span className="">
              <CiGlobe />
            </span>
            <p className="text-sm m-2 hidden group-hover:block">Lagos, Nigeria</p>
            <div className="absolute right-4 bottom-full mb-2 w-max max-w-xs -translate-x-1/2 text-sm text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Italy, soon!
            </div>
          </div>
        </div>

        <div className="absolute flex justify-between bottom-20 w-full text-right p-5">
          <span className="text-blue animate-bounce text-6xl">
            <IoIosArrowRoundDown />
          </span>
          <h1 className="text-4xl text-white">Babalola Wuraola Ajoke</h1>
        </div>
      </main>
    </div>
  );
}

export default Landing;
