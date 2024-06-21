import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../Common/Navbar';
import image from '../Assets/imageMe.JPG';
import Work from '../Component/Work';
import About from '../Component/About';
import Contact from '../Component/Contact';
import { motion, useScroll, useTransform } from 'framer-motion';

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
            setIsScrolledPastImage(progress > 0.5);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

   
    return (
        <div className=' font-playwrite text-white' >
      
            <Navbar scrolledPastImage={isScrolledPastImage} />
        
            <div className='container pt-28 ' ref={containerRef} style={{ height: '105vh' }}>
                <div style={{ display: isScrolledPastImage ? 'flex' : 'block' }}>
                    <div className='' style={{ flex: '1 0 30%', overflowY: 'auto' }}>
                        <div className='container px-7 py-2'>
                            <div className='right' style={{ position: isScrolledPastImage ? 'fixed' : 'relative' }}>
                                <div
                                    initial={{ x: 800 }}
                                    animate={{ x: 0 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className='title text-xl md:text-5xl'
                                    style={{ display: isScrolledPastImage ? 'none' : 'block' }}
                                >
                                    CREATIVE <br />
                                    DEVELOPER
                                </div>

                                <motion.div className=' justify-around items-center  md:ml-52' 
                                                                    transition={{ duration: 2, delay: 0.2 }}
                                                                    style={{ display: isScrolledPastImage ? 'grid' : 'flex', x: xTransform , marginTop: isScrolledPastImage?'-3em':'0em'}}>
                                    <div className='image  flex-1 ' >
                                        <img className={`${isScrolledPastImage ? 'w-40 h-40 rounded-full m-2 object-cover' : 'h-72 m-2 w-full object-cover rounded-xl'}`} src={image} alt="" />
                                    </div>
                                    <div 
                                    className={`${isScrolledPastImage ? 'info mt-5 ml-15 flex-1' : 'info mt-20 ml-10 flex-1'}`}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        style={{ y: yTransform, x: xTextTransform }}>
                                        <h5
                                            className=' font-bold'
                                            style={{ fontSize: isScrolledPastImage ? '2rem' : '1rem' }}
                                        >
                                            BABALOLA WURAOLA
                                        </h5>
                                        <h6 className=' my-1  font-medium'
                                            style={{ fontSize: isScrolledPastImage ? '.9rem' : '.7rem', }}>Experienced Frontend Engineer</h6>
                                        <p className='text-sm font-light'>
                                            I turn concepts into engaging and functional <br />
                                            user experiences. Let's build something great together!
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        style={{ flex: '1 0 60%', x: sideContentX, overflowY: isScrolledPastImage ? 'auto' : 'hidden' }}
                        className="side-content"
                    >
                        <About />
                        <Work />
                    </motion.div>
                    
                </div>
          <Contact />
~
            </div>
        </div>
    );
};

export default Home;
