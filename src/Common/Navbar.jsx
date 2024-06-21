import React from 'react';

const MyNavbar = ({ scrolledPastImage }) => {
  return (
    <div className='md:fixed w-full'>
      <div className='p-7 font-semibold  flex justify-between'>
      <nav>
        <a href="/">ajokemi</a>
      </nav>
      <nav className=' flex gap-3 md:hidden'>
      <a href="/">Work</a>
      <a href="/">Contact</a>

      </nav>
      </div>
    </div>
  );
};

export default MyNavbar;

