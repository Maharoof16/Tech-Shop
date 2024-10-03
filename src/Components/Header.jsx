
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md" style={{background:"black",position:"sticky",top:0}}>
      <div className="container-fluid mx-5">
        <h2 className="navbar-brand" style={{color:"silver"}}>Tech-Shop</h2>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" style={{color:"silver"}}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='mx-3'/>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{color:"silver"}}>
                <FontAwesomeIcon icon={faCartShopping} className='mx-3' />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{color:"silver"}}>
                <FontAwesomeIcon icon={faUser} className='mx-3'/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
