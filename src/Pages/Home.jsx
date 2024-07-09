import React from 'react';
import Navbar from '../Common/Navbar';
import Work from '../Component/Work';
import About from '../Component/About';
import Landing from '../Component/Landing';

import Personals from '../Component/Personal';




  const googleUrl ='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3eMcM5BC8Zz71h5pR6CLAWW3jBnNj9i0dGqHPzoMKm_pNJOFn7AFXKI8RWKzGBXDBDvvMXHmTr'
const Home = () => {

    return (
        <div className='font-playwrite grid' >
      
            <Navbar  />
            <Landing/>
            <About />
            <Work/>
            <Personals/>
            <div className='grid gap-4 m-10   items-center justify-center'>
                <p className='text-xl text-gray-600'>Let's work together!</p>
                <a href={googleUrl} target='_blank' rel="noopener noreferrer" className='text-white border  rounded-lg bg-blue text-center  p-4 text-sm font-bold'>Schedule a call</a>
            </div>
        </div>
    );
};

export default Home;
