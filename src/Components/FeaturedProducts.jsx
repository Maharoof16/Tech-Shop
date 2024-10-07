import React, {useState, useEffect } from 'react';
import productsData from './Products.json';

const FeaturedProducts = () => {
    const [slides, setSlides] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const filteredSlides = productsData.filter(product => product.tag === "featured-product");
        setSlides(filteredSlides);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
        }, 5000); 

        return () => clearInterval(interval); 
    }, [slides.length]);

    const getImageSrc = (imagePath) => {
        return require(`${imagePath}`);
    };
    
  return (
    <div className="featured-section">
            {slides.length > 0 ? (
                <div className='container-fluid bg-black p-5'>
                    <div className="row">
                        <div className="col-md-2">
                        <img src={getImageSrc(slides[((currentIndex-2)+slides.length)%slides.length].images[0])} alt={slides[currentIndex].title} style={{width:"8rem"}}/>
                        </div>
                        <div className="col-md-2">
                            <img src={getImageSrc(slides[((currentIndex-1)+slides.length)%slides.length].images[0])} alt="" style={{width:"10rem"}} />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                        <img src={getImageSrc(slides[currentIndex].images[0])} alt={slides[currentIndex].title} style={{width:"12rem"}}/>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                        <img src={getImageSrc(slides[((currentIndex+1)+slides.length)%slides.length].images[0])} alt="" style={{width:"10rem"}}/>
                        </div>
                        <div className="col-md-2">
                        <img src={getImageSrc(slides[((currentIndex+2)+slides.length)%slides.length].images[0])} alt="" style={{width:"8rem"}}/>
                        </div>
                    
                    </div>
                    

                </div>
               
            ) : (
                <div>Loading...</div>
            )}
        </div>
  )
}

export default FeaturedProducts
