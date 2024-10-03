import React from "react";
import {Routes,Route} from "react-router-dom";
import Slider from "../Components/Slider";

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Slider/>} />
    </Routes>
  )
}

export default Routing;