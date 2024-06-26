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

const Home = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const [isScrolledPastImage, setIsScrolledPastImage] = useState(false);
    const aboutData = {
        list: [
          'Developer based in NYC',
          'Love to travel and explore new cuisines',
          'Passionate about open-source',
        ],
      };
      
      const spotifyData = {
        topSongs: ['Song 1', 'Song 2', 'Song 3'],
        topGenres: ['Pop', 'Rock', 'Jazz'],
        topArtists: ['Artist 1', 'Artist 2', 'Artist 3'],
      };

   
    return (
        <div className=' font-playwrite text-white' >
      
            <Navbar scrolledPastImage={isScrolledPastImage} />
            <Landing/>
            <About />
            <Work/>

        
            {/* <div className='container bg-white pt-28 ' ref={containerRef} style={{ height: '115vh' }}>
                <div className=' grid md:flex ' >
                    <div className='' style={{ flex: '1 0 30%', overflowY: 'auto' }}>
                        <div className='container  py-2'>
                            <div className='right md:fixed'>
                                <section style={{backgroundImage: 'URL(../../Assets/image.png)'}}>

                                </section>
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
                        <Work />
                    </div>
                    
                </div>

            </div> */}
        </div>
    );
};

export default Home;
