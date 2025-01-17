import React, { useState, useEffect } from 'react';
import productsData from '../Assets/json/Products.json';
import { Link } from 'react-router-dom';
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
                        { [leftCornerIndex, leftIndex, currentIndex, rightIndex, rightCornerIndex].map((index, i) => {
                            let scale = 1.0; 
                            if (i === 1 || i === 3) scale = 1.3; 
                            if (i === 2) scale = 0.9;
                            
                            return (
                                <div key={index} className= {`col-md-${i === 2 ? '4' : '2'} my-${i === 2 ? '0' : i===1 || i===3 ? '3':'5'} py-${i === 2 ? '0' : i===1 || i===3 ? '3':'3'} text-center`}>
                                    <p>{featuredProducts[index].title}</p>
                                    <Link to={`/products/${featuredProducts[index].id}`}>
                                        <img 
                                            src={require(`${featuredProducts[index].images[0]}`)} 
                                            alt={featuredProducts[index].title} 
                                            style={{ 
                                                width: '80%', 
                                                height: 'auto', 
                                                transform: `scale(${scale})`, 
                                                transition: 'transform 0.3s ease-in-out'
                                            }} 
                                            className={` my-${i === 2 ? '0' : i===1 || i===3 ? '5':'3'} text-center`}
                                        />
                                    </Link>
                                    <h6 className=''>₹{featuredProducts[index].finalPrice} 
                                        <strike className='text-secondary mx-2'>₹{featuredProducts[index].originalPrice}</strike>
                                    </h6>
                                </div>
                            );
                        }) }
                    </div>
                    <div className='dynamic-sliders bg-black p-5'>
                        {featuredProducts.map((product, index) => (
                            <button 
                                className={`rounded-circle ${currentIndex === index ? 'active' : ''}`} 
                                key={product.id} 
                                onClick={() => setCurrentIndex(index)}
                            ></button>
                        ))}
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default FeaturedProducts;
