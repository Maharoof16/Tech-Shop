import React from 'react';
import HeroSlider from '../Components/HeroSlider';
import FeaturedProducts from '../Components/FeaturedProducts';
import TopProducts from '../Components/TopProducts';

const Home = () => {
  return (
    <div>
      <HeroSlider/>
      <FeaturedProducts/>
      <TopProducts/>
    </div>
  )
}

export default Home
