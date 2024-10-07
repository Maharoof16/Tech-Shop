import React from 'react';
import Slider from './Slider';
import TopProducts from './TopProducts';
import AllProducts from './AllProducts';
import FeaturedProducts from './FeaturedProducts';

const Home = () => {
  return (
    <div>
      <Slider/>
      <FeaturedProducts/>
      <TopProducts/>
    </div>
  )
}

export default Home
