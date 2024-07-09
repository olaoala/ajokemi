import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import HelloAnimation from './Component/Hello';


function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<HelloAnimation />} />
      <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
