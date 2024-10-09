import React,{useState} from 'react';
import productData from '../Assets/json/Products.json';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const {id}=useParams();
    console.log(id)
    const product = productData.find(product => product.id === parseInt(id));
    const [selectedImage,setSelectedImage]=useState(0);
    
    console.log(product.images)
    const getImageSrc = (imagePath) => {
        return require(`${imagePath}`);
    };
    
  return (
    <>
    { Object.keys(product).length ?(
        <div className='container-fluid bg-black text-white'>
            <div className="row mx-5 mt-5">
                <div className="col-md-1 mt-5">
                <div className="row">
                {product.images.map((img, index) => (
                            <div className="col-md-12 mb-5" key={index}>
                                <img src={getImageSrc(img)} alt={product.title} className="img-thumbnail mb-5 bg-black" onClick={()=>setSelectedImage(index)}  />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-md-6 mt-5">
                    <img src={getImageSrc(product.images[selectedImage])} alt="" className='img-fluid' />
                </div>
                <div className="col-md-5 mt-5">
                
                <h2>{product.title}</h2>
                <p>{product.info} </p>
                <hr/>
                <div >
                    <h2>₹{product.finalPrice} <strike>₹{product.originalPrice}</strike></h2>
                    <div >
                        <p>You save: ₹ (%)</p>
                    </div>
                    <p>(Inclusive of all taxes)</p>
                </div>
                <hr/>
                <div>
                    <h5>Offers and Discounts</h5>
                    <button className='btn btn-dark'>No Cost EMI on Credit Card</button>
                    <button className='btn btn-dark'>Pay Later & Avail Cashback</button>
                </div>
                <hr/>
                <button className='btn btn-danger '>Add to cart</button>
                </div>
            </div>

        </div>
    ):(<div>Loading...</div>)}
    </>
    
  )
}

export default SingleProduct;
