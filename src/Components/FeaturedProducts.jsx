import React, { useState, useEffect } from 'react';
import productsData from '../Assets/json/Products.json';
import './HeroSlider.css';

const FeaturedProducts = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const leftIndex = (currentIndex - 1 + featuredProducts.length) % featuredProducts.length;
    const leftCornerIndex = (currentIndex - 2 + featuredProducts.length) % featuredProducts.length;
    const rightIndex = (currentIndex + 1) % featuredProducts.length;
    const rightCornerIndex = (currentIndex + 2) % featuredProducts.length;

    useEffect(() => {
        const filterFeaturedProducts = productsData.filter(product => product.tag === "featured-product");
        setFeaturedProducts(filterFeaturedProducts);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % featuredProducts.length);
        }, 5000); 
        return () => clearInterval(interval); 
    }, [featuredProducts.length]);

    return (
        <div className="featured-section bg-black p-5 text-white">
            {featuredProducts.length > 0 ? (
                <div className='container-fluid my-5'>
                    <h2 className='text-center p-5'>Featured Products</h2>
                    <div className="row my-5">
                        <div className="col-md-2 my-5 text-center ">
                            <p >{featuredProducts[leftCornerIndex].title}</p>
                            <img src={require(`${featuredProducts[leftCornerIndex].images[0]}`)} alt={featuredProducts[leftCornerIndex].title} style={{ width: "80%", height: "auto" }} />
                            <h5 >₹{featuredProducts[leftCornerIndex].finalPrice} <strike>₹{featuredProducts[leftCornerIndex].originalPrice}</strike></h5>
                        </div>
                        <div className="col-md-2 my-3 text-center ">
                            <p >{featuredProducts[leftIndex].title}</p>
                            <img src={require(`${featuredProducts[leftIndex].images[0]}`)} alt={featuredProducts[leftIndex].title} style={{ width: "100%", height: "auto" }} />
                            <h5 >₹{featuredProducts[leftIndex].finalPrice} <strike>₹{featuredProducts[leftIndex].originalPrice}</strike></h5>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center ">
                            <div className="text-center">
                                <p>{featuredProducts[currentIndex].title}</p>
                                <img src={require(`${featuredProducts[currentIndex].images[0]}`)} alt={featuredProducts[currentIndex].title} style={{ width: "60%", height: "auto" }} />
                                <h5 >₹{featuredProducts[currentIndex].finalPrice} <strike>₹{featuredProducts[currentIndex].originalPrice}</strike></h5>
                            </div>
                        </div>
                        <div className="col-md-2 my-3 text-center ">
                            <p >{featuredProducts[rightIndex].title}</p>
                            <img src={require(`${featuredProducts[rightIndex].images[0]}`)} alt={featuredProducts[rightIndex].title} style={{ width: "100%", height: "auto" }} />
                            <h5>₹{featuredProducts[rightIndex].finalPrice} <strike>₹{featuredProducts[rightIndex].originalPrice}</strike></h5>
                        </div>
                        <div className="col-md-2 my-5 text-center">
                            <p >{featuredProducts[rightCornerIndex].title}</p>
                            <img src={require(`${featuredProducts[rightCornerIndex].images[0]}`)} alt={featuredProducts[rightCornerIndex].title} style={{ width: "80%", height: "auto" }} />
                            <h5 >₹{featuredProducts[rightCornerIndex].finalPrice} <strike>₹{featuredProducts[rightCornerIndex].originalPrice}</strike></h5>
                        </div>
                    </div>
                    <div className='dynamic-sliders bg-black p-5'>
                        {featuredProducts.map((product,index)=>(
                            <button className={`rounded-circle ${currentIndex===index ? 'active':''}`} key={product.id} onClick={()=>setCurrentIndex(index)}></button>
                        ))}
                    </div>
                </div>
                
            ) : (
                <div>Loading...</div>
            )}
           
        </div>
    )
}

export default FeaturedProducts;
