import React from 'react';
import productsData from'../Assets/json/Products.json';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from "react-redux";
import { addToCart } from '../Redux/ActionCreator';

const TopProducts = () => {
    const [products,setProducts]=useState([]);
    const [category,setCategory]=useState('Top-Products');
    const dispatch=useDispatch();
   
   
    const filterProducts = (selectedCategory) => {
        if (selectedCategory === 'Top-Products') {
            const topProducts = productsData.slice(0,11);
            setProducts(topProducts); 
        } else {
            const categoryProducts = productsData.filter(product => product.category === selectedCategory);
            setProducts(categoryProducts);
        }
    };

    useEffect(() => {
        filterProducts(category);
    }, [category]);

    const handleCategory=(productCategory)=>{
        setCategory(productCategory);
        filterProducts(productCategory);

    };

    const buttonClass=(productCategory)=>{
        return category===productCategory ? "btn active" :"btn"
    }
  return (
    <>
    {products.length>0?(
        <div className="container-fluid bg-black p-5 text-white">
            <h2 className='text-center my-5 p-5'>Top Products</h2>
            <div className="filter-buttons d-flex justify-content-between" style={{maxWidth:"60%",margin:"auto"}}>
                <button className={buttonClass('Top-Products')} onClick={() => handleCategory('Top-Products')}>All</button>
                <button className={buttonClass('Headphones')} onClick={() => handleCategory('Headphones')}>Headphones</button>
                <button className={buttonClass('Earbuds')} onClick={() => handleCategory('Earbuds')}>Earbuds</button>
                <button className={buttonClass('Earphones')} onClick={() => handleCategory('Earphones')}>Earphones</button>
                <button className={buttonClass('Neckbands')} onClick={() => handleCategory('Neckbands')}>Neckbands</button>
            </div>
            <div >
         <div className="row my-5">
             {products.map((product) => (
                 <div className="col-md-3 mb-4" key={product.id}>
                     <div className="card bg-black text-white border-secondary">
                        <Link to={`/products/${product.id}`}>
                              <img src={require(`${product.images[0]}`)}  className="card-img-top p-2" 
                                        alt={product.title} />
                        </Link>
                         <div className="card-body">
                             <h5 className="card-title">{product.title}</h5>
                             <p>{product.info}</p>
                            <h6>₹{product.finalPrice}<strike>₹{product.originalPrice}</strike></h6>
                            <button className= "btn btn-danger" onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
                         </div>
                     </div>
                 </div>
             ))}
             {products.length>0?(
                <div className="col-md-3 mb-4">
                <Link to="/all-products" className="card text-center bg-black text-white"> 
                    <div className="card-body">
                        <h5 className="card-title">Browse All Products</h5>
                    </div>
                    </Link>
            </div>
              ):(<div></div>)}
             </div>
         </div>
     </div>):(<div></div>)}
        
         
    </>
  )
}

export default TopProducts
