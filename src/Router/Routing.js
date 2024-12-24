import React from "react";
import {Routes,Route} from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
import Home from "../Pages/Home";
import FilterProducts from "../Pages/FilterProducts";
import SpecificProduct from "../Pages/SpecificProduct";
import ProductCart from "../Pages/ProductCart";


const Routing = () => {
  return (
    <>
    <ScrollToTop/> 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<ProductCart/>}/>
      <Route path="/products/:id" element={<SpecificProduct/>}/> 
      <Route path="/all-products" Component={FilterProducts}/>
    </Routes>
    </>
     
    
    
        
    
    
  )
}

export default Routing;