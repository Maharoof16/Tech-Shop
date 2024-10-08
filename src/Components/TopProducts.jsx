import React from 'react';
import productsData from'./Products.json';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from "react-redux";
import { addToCart } from '../Redux/ActionCreator';

const TopProducts = () => {
    const [topProducts,setProducts]=useState([]);
    const dispatch=useDispatch();
    useEffect(() => {
        const products = productsData.slice(0, 11);
        setProducts(products);
    }, []); 
    const getImageSrc = (imagePath) => {
        return require(`${imagePath}`);
    };
  return (
    <>
    {productsData.length>0?(
         <div className="container-fluid bg-black">
         <div className="row mx-5 ">
             {topProducts.map((product) => (
                 <div className="col-md-3 mb-4" key={product.id}>
                     <div className="card bg-black text-white">
                        <Link to={`/products/${product.id}`}>
                              <img src={getImageSrc(product.images[0])}  className="card-img-top p-2" 
                                        alt={product.title} />
                        </Link>
                         
                         <div className="card-body">
                             <h5 className="card-title">{product.title}</h5>
                             <p>{product.info}</p>
                            <h6>₹{product.finalPrice}<strike>₹{product.originalPrice}</strike></h6>
                            <button className="btn btn-danger" onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
                         </div>
                     </div>
                 </div>
             ))}
             {topProducts.length>0?(
                <div className="col-md-3 mb-4">
                <Link to="/all-products" className="card text-center bg-black text-white"> 
                    <div className="card-body">
                        <h5 className="card-title">Browse All Products</h5>
                    </div>
                    </Link>
            </div>
              ):(<div></div>)}
             
         </div>
     </div>):(<div></div>)}
    </>
  )
}

export default TopProducts
