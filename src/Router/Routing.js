import React from "react";
import {Routes,Route} from "react-router-dom";
import Slider from "../Components/Slider";
import FeaturedProducts from "../Components/FeaturedProducts";

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Slider/>} />
        {/* <Route path='/' element={<FeaturedProducts/>} /> */}
    </Routes>
  )
}

export default Routing;