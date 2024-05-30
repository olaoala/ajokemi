import React from 'react';
import Navbar from '../Common/Navbar';
import image from '../Assets/image.jpg'
import Work from '../Component/Work';
import About from '../Component/About'
import Contact from '../Component/Contact'


const Home = () => {
    return (
        <div className='container bg-amber-50 font-sans'>
            <Navbar />
            <div className='container  px-7 py-2'>
                <div className='right'>
                    <div className='text-6xl '>
                        CREATIVE <br />
                        DEVELOPER
                    </div>
                    <div >
                    <img className='max-h-56 my-2 w-1/2 object-cover ml-32 rounded-xl' src={image} alt="" />
                    </div>

                    <div>

                    </div>

                </div>
                <div className='left flex justify-between'>
                    <p className='text-8xl '>&darr;</p>
                    <p className='ttext-justify py-8'>tech baddie extrodineir, however <br />that is spelt and all those other good stuffs </p>
                    <p className='text-6xl '>BABALOLA <br /> WURAOLA</p>

                </div>
            </div>
            <About/>
            <hr className='border-zinc-500'/>  
            <Work/>
            <hr />
            <Contact/>

        </div>

    );
};

export default Home;
