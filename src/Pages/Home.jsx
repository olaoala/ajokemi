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

const Home = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const [isScrolledPastImage, setIsScrolledPastImage] = useState(false);

    // Transformations for initial content
    const xTransform = useTransform(scrollYProgress, [0, 0.5], ["0%", "-50%"]);
    const xTextTransform = useTransform(scrollYProgress, [0, 0.5], ["0%", "-10%"]);
    const yTransform = useTransform(scrollYProgress, [0, 0.5], ["0%", "-70%"]);

    // Transformations for side content
    const sideContentX = useTransform(scrollYProgress, [0.5, 1], ["100%", "0%"]);

    // Check if scrolled past a certain point
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (progress) => {
            setIsScrolledPastImage(progress > .9);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

   
    return (
        <div className=' font-playwrite text-white' >
      
            <Navbar scrolledPastImage={isScrolledPastImage} />
        
            <div className='container pt-28 ' ref={containerRef} style={{ height: '115vh' }}>
                <div className=' grid md:flex ' >
                    <div className='' style={{ flex: '1 0 30%', overflowY: 'auto' }}>
                        <div className='container  py-2'>
                            <div className='right md:fixed'>
                                <div className=' justify-around m-5' 
                                     transition={{ duration: 2, delay: 0.2 }}
                                                                    style={{ display : 'grid'}}>
                                    <div className='image  flex-1 ' >
                                        <img className= 'w-32 h-32 rounded-full m-2 object-cover'  src={image} alt="" />
                                    </div>
                                    <div 
                                    className='info mt-5 ml-15 flex-1' 
                                        transition={{ duration: 1, delay: 0.5 }}
                                        style={{ y: yTransform, x: xTextTransform }}>
                                        <h5
                                            className=' font-bold'
                                            style={{ fontSize: '1rem' }}
                                        >
                                            BABALOLA WURAOLA
                                        </h5>
                                        <h6 className=' my-1  font-medium'
                                            style={{ fontSize : '.7rem', }}>Experienced Frontend Engineer</h6>
                                        <p className='text-sm font-light'>
                                            I turn concepts into engaging and functional <br />
                                            user experiences. Let's build something great together!
                                        </p>
                                    </div>
                                    <>
                                    <nav>
                                        <ul className='gap-4 mt-4 text-xl' style={{ display: 'flex'  }}>
                                            <li><IoLogoInstagram/></li>
                                            <li><FaGithub/></li>
                                            <li><FaLinkedin/></li>
                                            <li><FaXTwitter/></li>
                                            <li><FaWhatsapp/></li>
                                        </ul>
                                    </nav>
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ flex: '1 0 60%', position: 'relative'}}
                        className="side-content"
                    >
                        <About />
                        <Work />
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default Home;
