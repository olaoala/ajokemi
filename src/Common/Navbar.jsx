import React from 'react';

const MyNavbar = ({ scrolledPastImage }) => {
  return (
    <div className='fixed w-full'>
      <div className='p-7 font-semibold  flex justify-between'>
        <div>
          ajokemi
        </div>
        <div className='flex' style={{ display: scrolledPastImage ? 'none' : 'block' }}>
          <a className='px-8' href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default MyNavbar;

