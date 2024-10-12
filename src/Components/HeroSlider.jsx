import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import productsData from '../Assets/json/Products.json'; 
import { Link } from 'react-router-dom';
import "./HeroSlider.css";

const HeroSlider = () => {
    const [heroProducts, setHeroproducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const filterHeroProducts = productsData.filter(product => product.tag === "hero-product");
        setHeroproducts(filterHeroProducts);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(previousIndex => (previousIndex + 1) % heroProducts.length);
        }, 5000); 
        return () => clearInterval(interval); 
    }, [heroProducts.length]);

    const handleSwipeLeft = () => {
        setCurrentIndex(previousIndex => (previousIndex === 0 ? heroProducts.length - 1 : previousIndex - 1));
    };

    const handleSwipeRight = () => {
        
        setCurrentIndex(previousIndex => (previousIndex + 1) % heroProducts.length);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    return (
        <div className="hero-section" {...swipeHandlers} >
            {heroProducts.length > 0 ? (
                <div className="container">
                    <div className="slider-content my-5">
                        <div className="slider-info " key={heroProducts[currentIndex].id}>
                            <h5>{heroProducts[currentIndex].title}</h5>
                            <h1>{heroProducts[currentIndex].tagline}</h1>
                            <h3 className='background-text'>{heroProducts[currentIndex].type}</h3>
                            <h4>₹{heroProducts[currentIndex].finalPrice}
                                <strike>₹{heroProducts[currentIndex].originalPrice}</strike> 
                            </h4>
                            <Link to={`/products/${heroProducts[currentIndex].id}`}>
                            <button className='hero-btn'>Shop Now</button>
                            </Link>
                            
                        </div>
                        <div className="slider-image ">
                            <img src={require(`${heroProducts[currentIndex].heroImage}`)} alt={heroProducts[currentIndex].heroImage} className='img-fluid' />
                        </div>
                    </div>
                    
                </div>
            ) : (
                <div>Loading...</div>
            )}
            <div className='dynamic-sliders bg-black'>
                        {heroProducts.map((product,index)=>(
                            <button className={`rounded-circle ${currentIndex===index ? 'active':''}`} key={product.id} onClick={()=>setCurrentIndex(index)}></button>
                        ))}
            </div>
        </div>
    );
};

export default HeroSlider;
