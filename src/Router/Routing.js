import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "../Components/Home";
import SingleProduct from "../Components/SingleProduct";
import AllProducts from "../Components/AllProducts";
import Cart from "../Components/Cart";





const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/products/:id" element={<SingleProduct/>}/>
      <Route path="/all-products" element={<AllProducts/>}/>

    </Routes>
  )
}

export default Routing;