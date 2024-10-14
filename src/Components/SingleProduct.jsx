import React,{useState} from 'react';
import productData from '../Assets/json/Products.json';
import { useParams } from 'react-router-dom';
import reviewsData from '../Assets/json/Reviews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from "react-redux";
import { addToCart } from '../Redux/ActionCreator';
import { Link } from 'react-router-dom';

const SingleProduct = () => {
    const {id}=useParams();
    const product = productData.find(product => product.id === parseInt(id));
    const [selectedImage,setSelectedImage]=useState(0);
    const discount=product.originalPrice-product.finalPrice;
    const discountPercentile=Math.round((discount*100)/(product.originalPrice));
    const[productInfo,setInfoCategory]=useState('Specifications');
    const relatedProducts=productData.filter((item)=>item.category===product.category && item.id!==product.id);
    const dispatch=useDispatch();




    const handleInfo=()=>{
        if(productInfo==='Specifications'){
            return (
                <div className='row p-5'>
                    <div className="col-md-5">
                    <div className="brand d-flex justify-content-between">
                        <p>Brand</p>
                        <h6>{product.brand}</h6>
                    </div>

                    <div className="model d-flex justify-content-between">
                        <p>model</p>
                        <h6>{product.title}</h6>
                    </div>
                     
                    <div className="category d-flex justify-content-between">
                        <p>Generic Name</p>
                        <h6>{product.category}</h6>
                    </div>
                    
                    <div className="type d-flex justify-content-between">
                        <p>Headphone Type</p>
                        <h6>{product.type}</h6>
                    </div>

                    <div className="connectivity d-flex justify-content-between">
                        <p>Connectivity</p>
                        <h6>{product.connectivity}</h6>
                    </div>

                    <div className="microphone-availibility d-flex justify-content-between">
                        <p>Microphone</p>
                        <h6>Yes</h6>
                    </div>
                    </div>
                </div>
            )

        }else if(productInfo==='Overview'){
            return(
                <div className="row p-5">
                    <h5 className='mx-2'>The <span className='text-danger'>{product.title}</span> {product.type} Truly {product.connectivity} {product.category} provides with fabulous sound quality</h5>
                    <div>
                    <ul>
                        <li>Sound Tuned to Perfection</li>
                        <li>Comfortable to Wear</li>
                        <li>Long Hours Playback Time</li>
                    </ul>
                    </div>
                   
                    <p>Buy the <span className='h6 mx-3'>{product.title} {product.type} Truly {product.connectivity} {product.category}</span> which offers you with fabulous music experience by providing you with awesome sound quality that you can never move on from. Enjoy perfect flexibility and mobility with amazing musical quality with these Earbuds giving you a truly awesome audio experience. It blends with exceptional sound quality and a range of smart features for an unrivalled listening experience.</p>
                </div>
            )
        }else{
            return(
                <>
                <div className='row p-5'>
                <div className="col-md-5">
                {reviewsData.map((reviewer)=>(
                        <div className='px-5 mb-5'>
                            <h6 className='mx-5'>{reviewer.name}</h6>
                            <div className="rating mx-5 my-2">
                            {[...Array(reviewer.rateCount)].map((_, index) => (
                            <FontAwesomeIcon key={index} icon={faStar} style={{ color: 'red' }} />
                        ))}
                        <span className='border-start m-2 p-2 text-secondary'>{reviewer.date}</span>
                            </div>
                            
                            <p>{reviewer.review}</p>
                        </div>      
                ))}
                </div>
                </div>
                </>
            )
        }
    }
    
    const activeButton=(category)=>{
        return category===productInfo ? 'btn active' : 'btn text-white mx-5'
    };

  return (
    <>
    { Object.keys(product).length ?(
        <div className='container-fluid bg-black text-white p-5'>
            <div className="row my-5">
                <div className="col-md-1 my-5">
                    <div className="row">
                        {product.images.map((img, index) => (
                            <div className="col-md-12 mb-5" key={index}>
                                <img src={require(`${img}`)} alt={product.title} className="img-thumbnail mb-5 bg-black" onClick={()=>setSelectedImage(index)}  />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-md-6 mt-5">
                    <img src={require(`${product.images[selectedImage]}`)} alt="" className='img-fluid' />
                </div>
                <div className="col-md-5 mt-5">
                <h2>{product.title}</h2>
                <p>{product.info} </p>
                <hr/>
                <div >
                    <h3>₹{product.finalPrice} <strike className='text-secondary h4'>₹{product.originalPrice}</strike></h3>
                    <div >
                        <p>You save: <span className='text-success'>₹{discount} ({discountPercentile}%)</span></p>
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
                <button className='btn px-3'  style={{color:'white',backgroundColor:'red'}}>Add to cart</button>
                </div>
            </div>

            <div className="row mt-5">
                <div className="row">
                <div className="information-buttons d-flex justify-content-center flex-column flex-md-row">
                    <button className={activeButton('Specifications')} onClick={()=>setInfoCategory('Specifications')}>Specifications</button>
                    <button className={activeButton('Overview')} onClick={()=>setInfoCategory('Overview')}>Overview</button>
                    <button className={activeButton('Reviews')} onClick={()=>setInfoCategory('Reviews')}>Reviews</button>
                </div>
                </div>
                
                <div className="row">
                    {handleInfo()}
                </div>
            </div>

            <div className="row p-5">
                <h3 className='text-center mb-5 p-5'>Related Products</h3>
                {relatedProducts.map((product) => (
                 <div className="col-md-3 mb-4" key={product.id}>
                     <div className="card bg-black text-white border-secondary" style={{minHeight:'100%'}}>
                        <Link to={`/products/${product.id}`}>
                              <img src={require(`${product.images[0]}`)}  className="card-img-top p-3" style={{backgroundColor:"#121212"}} 
                                        alt={product.title} />
                        </Link>
                         <div className="card-body " >
                             <h5 className="card-title">{product.title}</h5>
                             <p>{product.info}</p>
                             <hr />
                            <h6 className='pb-2'>₹{product.finalPrice}<strike className='px-2'>₹{product.originalPrice}</strike></h6>
                            <button className= "btn text-white " style={{backgroundColor:"red",width:"100%"}}  onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
                         </div>
                     </div>
                 </div>
             ))}
            </div>

        </div>
    ):(<div>Loading...</div>)}
    </>
    
  )
}

export default SingleProduct;
