import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "../Pages/Home";
import FilterProducts from "../Pages/FilterProducts";
import SpecificProduct from "../Pages/SpecificProduct";
import ProductCart from "../Pages/ProductCart";


const Routing = () => {
  return (
    <Routes>
      <Route path="/" exact Component={Home}/>
      <Route path="/cart" exact Component={ProductCart}/>
      <Route path="/products/:id" exact Component={SpecificProduct}/> 
      <Route path="/all-products" exact Component={FilterProducts}/>  
    </Routes>
  )
}

export default Routing;