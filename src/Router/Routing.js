import React from "react";
import {Routes,Route} from "react-router-dom";
import AllProducts from "../Components/AllProducts";
import Home from "../Components/Home";
import SingleProduct from "../Components/SingleProduct";
import TopProducts from "../Components/TopProducts";




const Routing = () => {
  return (
    <Routes>
      <Route path="/" exact Component={Home}/>
      <Route path="/products/:id" element={<SingleProduct/>}/>
       <Route path="/all-products" exact Component={AllProducts}/>
      
        
    </Routes>
  )
}

export default Routing;