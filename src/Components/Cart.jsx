import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan,faMinus,faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../Redux/ActionCreator';
import { cartCount, totalFinalPrice, totalOriginalPrice} from '../Redux/Selector'; 

const Cart = () => {
  const cart_data=useSelector((state)=>state.productData.cartData)
  const dispatch=useDispatch();
  console.log(cart_data);
  const totalOP=useSelector(totalOriginalPrice);
  const count=useSelector(cartCount);
  const totalFP=useSelector(totalFinalPrice)

  const getImageSrc=(imagePath)=>{
    return require(`${imagePath}`);
  };
  return (
    <div className='container-fluid bg-black text-white p-5'>
        {cart_data.length>0?(
          <div className='row p-5'>
             <div className='col-md-7 overflow-auto' style={{maxHeight:"100vh",backgroundColor:"#121212"}}>
            {cart_data.map((product)=>(
                <div className="row mt-5">
                  <div className="col-md-4">
                    <img src={getImageSrc(product.images[0])} alt={product.title} className='img-thumbnail' style={{backgroundColor:"#121212",border:"none"}} />
                  </div>
                  <div className="col-md-8">
                    <div className="d-flex">
                    <p style={{fontSize:"large"}}>{product.title} {product.info}</p> 
                    <span  className='mx-5' onClick={()=>dispatch(removeFromCart(product.id))}><FontAwesomeIcon icon={faTrashCan} /></span>
                    </div>
                    <h5>₹{product.finalPrice}<strike> ₹{product.originalPrice}</strike></h5>
                    <div className="d-flex">
                      <button className='btn increment' onClick={()=>dispatch(incrementQuantity(product.id))}><FontAwesomeIcon icon={faPlus}/></button>
                      <p>{product.quantity}</p>
                      <button className='btn deccrement' onClick={()=>dispatch(decrementQuantity(product.id))}><FontAwesomeIcon icon={faMinus} /></button>
                    </div>
                  </div>
                </div>
              ))}
             </div>
             <div className="col-md-4">
              <h4>Order Summary ({count})</h4>
              <h6>Original Price <span className='mx-5'>₹{totalOP}</span></h6>
              <h6>Discount <span className='mx-5'>₹{totalOP-totalFP}</span></h6>
              <h4>Total Price <span >₹{totalFP}</span></h4>
             </div>
          </div>
        ):(<div>EmptyCart</div>)}
    </div>
  )
}

export default Cart;

