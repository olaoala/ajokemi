import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Contact from './Component/Contact';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <Router>
         <div
        className=" fixed  rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br to-[#21254a9a] from-[#172550]  blur-3xl shadow-custom"
        style={{
          width: '500px',
          height: '500px',
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
          <Home/>


      <Routes>
        
      </Routes>

    </Router>
  );
}

export default App;
