import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import productsData from '../../Assets/json/Products.json';
import { cartCount } from '../../Redux/Selector';
import { useSelector } from 'react-redux';
import SearchModal from './SearchModal';
import LoginModal from './LoginModal';

const Header = () => {
  const count = useSelector(cartCount);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      const filtered = productsData.filter(product =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setFilteredProducts([]);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid mx-5">
          <Link to="/" className="navbar-brand">Tech-Shop</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <OverlayTrigger placement='bottom-end' delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="search-tooltip">Search</Tooltip>}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="nav-link mx-3" data-bs-toggle='modal' data-bs-target='#searchbarModal' />
                </OverlayTrigger>
              </li>
              <li className="nav-item">
                <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="cart-tooltip">Cart</Tooltip>}>
                  <Link to="/cart" className="nav-link position-relative mx-3">
                    <FontAwesomeIcon icon={faCartShopping} />
                    {count > 0 && <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">{count}</span>}
                  </Link>
                </OverlayTrigger>
              </li>
              <li className="nav-item">
                <OverlayTrigger placement="bottom-end" delay={{ show: 250, hide: 800 }} overlay={
                  <Tooltip id="user-tooltip">
                    <div>
                      <h5>Hello!</h5>
                      <p>Access account and manage orders</p>
                      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Login/Signup</button>
                      <hr />
                      <p>Please Login</p>
                    </div>
                  </Tooltip>}>
                  <FontAwesomeIcon icon={faUser} className="nav-link mx-3" />
                </OverlayTrigger>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <SearchModal
        searchTerm={searchTerm}
        filteredProducts={filteredProducts}
        handleSearchChange={handleSearchChange}
        clearSearch={clearSearch}/>
      <LoginModal />
    </>
  );
};

export default Header;
