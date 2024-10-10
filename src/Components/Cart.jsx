import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../Redux/ActionCreator';

const Cart = () => {
  const cart_data=useSelector((state)=>state.productData.cartData)
  const dispatch=useDispatch();
  console.log(cart_data)

  const getImageSrc=(imagePath)=>{
    return require(`${imagePath}`);
  };
  return (
    <div className='container-fluid bg-black mt-5'>
      <div className='container mt-5'>
        {cart_data.length>0?(
          <div className='row mt-5'>
             <div className='col-md-7 overflow-auto bg-secondary' style={{maxHeight:"100vh"}}>
            {cart_data.map((product)=>(
                <div className="row mt-5">
                  <div className="col-md-4">
                    <img src={getImageSrc(product.images[0])} alt={product.title} className='img-thumbnail' />
                  </div>
                  <div className="col-md-8">
                    <h5>{product.title} {product.info}</h5>
                    <h5>{product.finalPrice} <strike>{product.originalPrice}</strike></h5>
                    <div className="quantity-buttons">
                      <button className='btn increment' onClick={()=>dispatch(incrementQuantity(product.id))}>plus</button>
                      <p>{product.quantity}</p>
                      <button className='btn deccrement' onClick={()=>dispatch(decrementQuantity(product.id))}>minus</button>
                    </div>
                    <span onClick={()=>dispatch(removeFromCart(product.id))}><FontAwesomeIcon icon={faTrashCan} /></span>
                  </div>
                </div>
              ))}
             </div>
             <div className="col-md-4">

             </div>
          </div>
        ):(<div>EmptyCart</div>)}
      </div>
    </div>
  )
}

export default Cart;

