import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTruckFast,faShieldHalved,faTags,faCreditCard,} from '@fortawesome/free-solid-svg-icons';
import footerData from '../Assets/json/FooterData.json';
const Footer = () => {
  return (
    <>
    <div>
    <div className='container-fluid bg-black p-5 '>
      <div className="Advantages my-5">
      <div className="row text-white">
        <div className="col-md-3">
          <div className="row">
            <div className="col-md-3">
              <FontAwesomeIcon icon={faTruckFast} className='p-3' style={{color:"red",fontSize:"xx-large"}}/>
            </div>
            <div className="col-md-9">
              <h4>Express Delivery</h4>
              <p>Ships in 24 hours</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="row">
            <div className="col-md-3">
              <FontAwesomeIcon icon={faShieldHalved} className='p-3' style={{color:"red",fontSize:"xx-large"}}/>
            </div>
            <div className="col-md-9">
              <h4>Brand Warranty</h4>
              <p>100% Original Products</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="row">
            <div className="col-md-3">
              <FontAwesomeIcon icon={faTags} className='p-3' style={{color:"red",fontSize:"xx-large"}}/>
            </div>
            <div className="col-md-9">
              <h4>Exciting Deals</h4>
              <p>On all prepaid orders</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="row">
            <div className="col-md-3">
              <FontAwesomeIcon icon={faCreditCard} className='p-3' style={{color:"red",fontSize:"xx-large"}}/>
            </div>
            <div className="col-md-9">
              <h4>Secure Payments</h4>
              <p>SSL/Secure Certificate</p>
            </div>
          </div>
        </div>
      </div>
      </div> 
    </div>
    <div className="container-fluid bg-black p-5">
      <div className="row my-5">
        <div className="col-md-4">
          <div className="row">
          <h2>Tech-Shop</h2>
                <p>Subscribe to our Email alerts to receive early discount offers, and new product info</p>
                <input type="email" placeholder="Email Address*" className='form-control mb-3' />
                <button className='btn' style={{maxWidth:'max-content',backgroundColor:'red',color:'white'}}>Subscribe</button>
          </div>
        </div>
        <div className="col-md-8">
          <div className="row">
          {footerData.footMenu.map(section => (
                        <div key={section.id} className="col-md-4 d-flex flex-column align-items-center">
                            <ul className="list-unstyled" >
                            <h6 className='text-white'>{section.title}</h6>
                            {section.menu.map(item => (
                              
                              <li>
                                <a href={item.path} key={item.id} style={{textDecoration:'none',color:'#333'}}>{item.link}</a>
                              </li>
                                        
                                ))}
                            </ul>
                        </div>
                    ))}
          </div>
        </div>
      </div>
      </div>
    </div>
    
    </>
  )
}

export default Footer;
