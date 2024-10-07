import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "../Components/Home";
import SingleProduct from "../Components/SingleProduct";
import AllProducts from "../Components/AllProducts";





const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products/:id" element={<SingleProduct/>}/>
       <Route path="/all-products" element={<AllProducts/>}/>
    </Routes>
  )
}

export default Routing;