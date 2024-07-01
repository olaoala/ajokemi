import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../Common/Navbar';
import image from '../Assets/imageMe.JPG';
import Work from '../Component/Work';
import About from '../Component/About';
import Contact from '../Component/Contact';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Landing from '../Component/Landing';
import Card from '../Common/Cards';
import ProjectCards from '../Component/Project';
import Personals from '../Component/Personal';

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
                <button className='text-white border  rounded-lg bg-blue  p-4 text-sm font-bold'>Schedule a call</button>
            </div>
        </div>
    );
};

export default Home;
