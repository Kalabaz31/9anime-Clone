import React from 'react';

import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Pins from './Pins';

const Home = () => {
  return <div className='p-4 text-white overflow-hidden min-h-screen xl:w-2/3 m-auto'>
    
    <Navbar />

    <Slider />

    <Pins headerTitle="Recently Updated" />

  </div>;
};

export default Home;
