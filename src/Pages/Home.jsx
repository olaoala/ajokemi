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
        </div>
    );
};

export default Home;
