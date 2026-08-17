import React from 'react';

const MyNavbar = ({ scrolledPastImage }) => {
  return (
    <div className='bg-blue w-full sticky top-0 z-20'>
      <div className='p-5 md:p-7 font-semibold flex items-center justify-between flex-wrap gap-4'>
        <a href="/home" className='text-lg text-white'>ajokemi</a>
        <nav className='flex items-center gap-4 md:gap-6 text-sm'>
          <a href="#about" className='text-muted hover:text-white'>About</a>
          <a href="#work" className='text-muted hover:text-white'>Work</a>
          <a href="#reviews" className='text-muted hover:text-white'>Reviews</a>
          <a href="#contact" className='text-muted hover:text-white'>Contact</a>
          {/* TODO: once a resume PDF is added to /public/resume.pdf, this link goes live */}
          <a
            href="/resume.pdf"
            target='_blank'
            rel="noopener noreferrer"
            className='rounded-lg bg-accent text-accentOn px-4 py-2 font-bold'
          >
            Resume
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MyNavbar;

