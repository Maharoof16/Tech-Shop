import React from "react";
import {Routes,Route} from "react-router-dom";
import AllProducts from "../Components/AllProducts";
import Home from "../Components/Home";




const Routing = () => {
  return (
    <Routes>
      <Route path="/" exact Component={Home}/>
       <Route path="/all-products" element={<AllProducts/>}/>
      
        
    </Routes>
  )
}

export default Routing;