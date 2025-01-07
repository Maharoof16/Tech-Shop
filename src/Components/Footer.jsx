import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTruckFast,faShieldHalved,faTags,faCreditCard} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faTwitter,faInstagram,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import footerData from '../Assets/json/FooterData.json';
const Footer = () => {
  return (
    <>
    <div className='container-fluid bg-black p-5 text-white'>
      <div className="row">
      <h3 className='text-center my-5 py-3'>Our Advantages</h3>
      <div className="row text-white">
        <div className="col-md-3">
          <div className="row">
            <div className="col-md-3">
              <FontAwesomeIcon icon={faTruckFast} className='p-3' style={{color:"red",fontSize:"xx-large"}}/>
            </div>
            <div className="col-md-9">
              <h5>Express Delivery</h5>
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
              <h5>Brand Warranty</h5>
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
              <h5>Exciting Deals</h5>
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
              <h5>Secure Payments</h5>
              <p>SSL/Secure Certificate</p>
            </div>
          </div>
        </div>
      </div>
      </div> 

      <div className="row my-5 border-bottom">
        <div className="col-md-4 my-5">
          <div className="row">
          <h2>Tech-Shop</h2>
                <p>Subscribe to our Email alerts to receive early discount offers, and new product info</p>
                <input type="email" placeholder="Email Address*" className='form-control mb-3' />
                <button className='btn' style={{maxWidth:'max-content',backgroundColor:'red',color:'white'}}>Subscribe</button>
          </div>
        </div>
        <div className="col-md-8 my-5">
          <div className="row">
          {footerData.footMenu.map(section => (
                        <div key={section.id} className="col-md-4 px-md-5">
                            <ul className="list-unstyled" >
                            <h6 className='text-white'>{section.title}</h6>
                            {section.menu.map(item => (
                              
                              <li>
                                <a href={item.path} key={item.id} style={{textDecoration:'none',color:'lightslategrey'}}>{item.link}</a>
                              </li>
                                        
                                ))}
                            </ul>
                        </div>
                    ))}
          </div>
        </div>
      </div>

      <div className="row">
        <div className='d-flex justify-content-between'>
          <div>
            <p>2024 | ALL Rights Reserved. Built by | <span className='h6'>MAHAROOF KP</span></p>
          </div>

          <div>
            <FontAwesomeIcon icon={faFacebook} className='mx-3'/>
            <FontAwesomeIcon icon={faTwitter} className='mx-3'/>
            <FontAwesomeIcon icon={faInstagram} className='mx-3'/>
            <FontAwesomeIcon icon={faLinkedinIn} className='mx-3'/>
          </div>
        </div>
      </div>
    </div>

    
    </>
  )
}

export default Footer;
