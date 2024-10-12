import React from 'react';
import HeroSlider from '../Components/HeroSlider';
import FeaturedProducts from '../Components/FeaturedProducts';
import TopProducts from '../Components/TopProducts';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
      <HeroSlider/>
      <FeaturedProducts/>
      <TopProducts/>
      <Footer/>
    </div>
  )
}

export default Home
