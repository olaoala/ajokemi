import React, { useRef, useState } from 'react';
import Navbar from '../Common/Navbar';
import Work from '../Component/Work';
import About from '../Component/About';
import { motion, useScroll, useTransform } from 'framer-motion';
import Landing from '../Component/Landing';

import Personals from '../Component/Personal';

import { google } from "calendar-link";

const event = {
    title: "Schedule a meeting",
    description: "!",
    start: "2024-12-29 18:00:00 +0100",
    duration: [3, "hour"],
  }; 
 console.log(google(event)) ;

  const googleUrl ='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3eMcM5BC8Zz71h5pR6CLAWW3jBnNj9i0dGqHPzoMKm_pNJOFn7AFXKI8RWKzGBXDBDvvMXHmTr'
const Home = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const [isScrolledPastImage, setIsScrolledPastImage] = useState(false);

    return (
        <div className='font-playwrite text-white' >
      
            <Navbar scrolledPastImage={isScrolledPastImage} />
            <Landing/>
            <About />
            <Work/>
            <Personals/>
            <div className='grid gap-4 m-10   items-center justify-center'>
                <p className='text-xl text-gray-600'>Let's work together!</p>
                <a href={googleUrl} target='_blank' className='text-white border  rounded-lg bg-blue text-center  p-4 text-sm font-bold'>Schedule a call</a>
            </div>
        </div>
    );
};

export default Home;
