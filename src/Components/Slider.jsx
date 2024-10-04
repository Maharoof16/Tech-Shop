import React, { useState, useEffect } from 'react';
import productsData from './Products.json'; 
import './Slider.css'; 

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
        }, 3000); 

        return () => clearInterval(interval); 
    }, [slides.length]);

    const getImageSrc = (imagePath) => {
        return require(`${imagePath}`);
    };

    return (
        <div className="hero-section" onClick={() => setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length)}>
            {slides.length > 0 ? (
                <div className="container">
                    <div className="slider-content">
                        <div className="slider-info">
                            <h5>{slides[currentIndex].title}</h5>
                            <h1>{slides[currentIndex].tagline}</h1>
                            <h3 className='background-text'>{slides[currentIndex].type}</h3>
                            <h4>₹{slides[currentIndex].finalPrice}
                                <strike>₹{slides[currentIndex].originalPrice}</strike> 
                            </h4>
                            <button className='hero-btn'>Shop Now</button>
                        </div>
                        <div className="slider-image">
                            <img src={getImageSrc(slides[currentIndex].heroImage)} alt={slides[currentIndex].id} />
                        </div>
                    </div>
                </div>
            ) : (
                <div>No data</div>
            )}
        </div>
    );
};

export default Slider;
