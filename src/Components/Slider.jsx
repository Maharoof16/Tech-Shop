import React, { useState, useEffect } from 'react';
import productsData from './Products.json'; 
import './Slider.css'; 
import { Link } from 'react-router-dom';

const Slider = () => {
    const [slides, setSlides] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const filteredSlides = productsData.filter(product => product.tag === "hero-product");
        setSlides(filteredSlides);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
        },2000); 

        return () => clearInterval(interval); 
    }, [slides.length]);

    const getImageSrc = (imagePath) => {
        return require(`${imagePath}`);
    };

    return (
        <div className="hero-section">
            {slides.length > 0 ? (
                <div className="container">
                    <div className="slider-content mt-5">
                        <div className="slider-info">
                            <h5>{slides[currentIndex].title}</h5>
                            <h1>{slides[currentIndex].tagline}</h1>
                            <h3 className='background-text'>{slides[currentIndex].type}</h3>
                            <h4>₹{slides[currentIndex].finalPrice}
                                <strike>₹{slides[currentIndex].originalPrice}</strike> 
                            </h4>
                            <Link to={`/products/${slides[currentIndex].id}`}>
                            <button className='hero-btn'>Shop Now</button>
                            </Link>
                            
                        </div>
                        <div className="slider-image">
                            <img src={getImageSrc(slides[currentIndex].heroImage)} alt={slides[currentIndex].id} />
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Slider;
