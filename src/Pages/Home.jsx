import React from 'react';
import Navbar from '../Common/Navbar';
import Work from '../Component/Work';
import About from '../Component/About';
import Landing from '../Component/Landing';
import Reviews from '../Component/Reviews';
import Contact from '../Component/Contact';

const Home = () => {

    return (
        <div className='font-playwrite text-white grid' >

            <Navbar  />
            <Landing/>
            <About />
            <Work/>
            <Reviews />
            <Contact />
        </div>
    );
};

export default Home;
