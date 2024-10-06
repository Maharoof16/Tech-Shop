import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const NavbarWithModal = () => {
  return (
    <>
    <nav className="navbar navbar-expand-md" style={{ background: "black", position: "fixed", top: "0", width: "100%", zIndex: 1 }}>
        <div className="container-fluid mx-5">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h2 className="navbar-brand" style={{ color: "silver" }}>Tech-Shop</h2>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" style={{ color: "silver" }}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className='mx-3' />
                </a>
              </li>
              <li className="nav-item">
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 800 }}
                  overlay={<Tooltip id="cart-tooltip">Cart</Tooltip>}
                >
                  <a className="nav-link" style={{ color: "silver" }}>
                    <FontAwesomeIcon icon={faCartShopping} className='mx-3' />
                  </a>
                </OverlayTrigger>
              </li>
              <li className="nav-item">
                <OverlayTrigger
                  placement="bottom-end"
                  delay={{ show: 250, hide: 800 }}
                  overlay={
                    <Tooltip id="user-tooltip">
                      <div>
                        <h5>Hello!</h5>
                        <p>Access account and manage orders</p>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Login/Signup</button>
                        <hr />
                        <p>Please Login</p>
                      </div>
                    </Tooltip>
                  }
                >
                  <a className="nav-link" style={{ color: "silver" }}>
                    <FontAwesomeIcon icon={faUser} className='mx-3' />
                  </a>
                </OverlayTrigger>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
      <div className="modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ zIndex: 1051 }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Hello, this is the modal body content.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
      
  );
};

export default NavbarWithModal;
