import React from 'react';

import Navbar from '../components/Navbar';
import Slider from '../components/Slider';

const Home = () => {
  return <div className='p-4 text-white overflow-hidden min-h-screen'>
    
    <Navbar />

    <Slider />

  </div>;
};

export default Home;
