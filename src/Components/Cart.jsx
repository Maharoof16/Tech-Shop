import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan,faMinus,faPlus, faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../Redux/ActionCreator';
import { cartCount, totalFinalPrice, totalOriginalPrice} from '../Redux/Selector'; 
import {Link} from 'react-router-dom';

const Cart = () => {
  const cart_data=useSelector((state)=>state.productData.cartData)
  const dispatch=useDispatch();
  const totalOP=useSelector(totalOriginalPrice);
  const count=useSelector(cartCount);
  const totalFP=useSelector(totalFinalPrice)

  return (
    <div className='container-fluid bg-black text-white p-5' style={{minHeight:'100vh'}}>
        {cart_data.length>0?(
          <div className='row p-5' >
             <div className='col-md-7 overflow-auto' style={{backgroundColor:"#121212",maxHeight:'100vh'}}>
            {cart_data.map((product)=>(
                <div className="row mt-5">
                  <div className="col-md-4">
                    <img src={require(`${(product.images[0])}`)} alt={product.title} className='img-thumbnail' style={{backgroundColor:"#121212",border:"none"}} />
                  </div>
                  <div className="col-md-8">
                    <div className="d-flex">
                    <p style={{fontSize:"large"}}>{product.title} {product.info}</p> 
                    <span  className='mx-5' onClick={()=>dispatch(removeFromCart(product.id))}><FontAwesomeIcon icon={faTrashCan} /></span>
                    </div>
                    <h5>₹{product.finalPrice}<strike className='text-secondary mx-3 h6'> ₹{product.originalPrice}</strike></h5>
                    <div className="d-flex border border-secondary my-3" style={{maxWidth:'fit-content'}}> 
                      <button className='btn increment text-white' onClick={()=>dispatch(incrementQuantity(product.id))}><FontAwesomeIcon icon={faPlus}/></button>
                      <p className='text-danger h4'>{product.quantity}</p>
                      <button className='btn deccrement text-white' onClick={()=>dispatch(decrementQuantity(product.id))}><FontAwesomeIcon icon={faMinus} /></button>
                    </div>
                  </div>
                </div>
              ))}
             </div>
             <div className="col-md-5 px-5">
             <h4 className=''>Order Summary ({count})</h4>
              <div className="row" style={{color:'lightgrey'}}>
              <div className="d-flex justify-content-between my-3">
              <h6>Original Price</h6>
              <h6>₹{totalOP}</h6>
              </div>

              <div className="d-flex justify-content-between">
              <h6>Discount </h6>
              <h6 className='text-success'>₹{totalOP-totalFP}</h6>
              </div>

              <div className='d-flex justify-content-between border-bottom py-3'>
                <h6>Delivery</h6>
                <h6 className='text-success'>Free</h6>
              </div>

              <div className="d-flex justify-content-between my-5">
              <h5>Total Price</h5>
              <h5>₹{totalFP}</h5>
              </div>

              <div className=''>
              <button className='btn' style={{backgroundColor:'red',color:'white',width:'100%',fontSize:'large'}}>Checkout</button>
              </div>
              </div>
             </div>
          </div>
        ):(<div className='row p-5 my-5'>
          <div className="empty-cart-icons text-center d-flex justify-content-center px-5 mt-5" style={{position:'relative'}}>
          <FontAwesomeIcon icon={faCartShopping} style={{fontSize:"13vw",color:'red'}}/>
          <FontAwesomeIcon icon={faXmark} style={{fontSize:"8vw",position:'absolute'}}/>
          </div>
          
          <div className='d-flex flex-column justify-content-center align-items-center'> 
          <h2 className='text-center p-4'>Your Cart is Empty</h2>
          <Link to="/all-products">
          <button className='btn px-5' style={{maxWidth:'fit-content',color:'white',backgroundColor:'red'}}>Start Shopping</button>
          </Link>
          </div>
          </div>)}
    </div>
  )
}

export default Cart;

