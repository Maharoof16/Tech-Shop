import React from 'react';
import { Link } from 'react-router-dom';

const SearchModal = ({ searchTerm, filteredProducts, handleSearchChange, clearSearch }) => {
  return (
    <div className="modal" id="searchbarModal" tabIndex="-1" aria-labelledby="searchbarModalLabel" aria-hidden="true" style={{ zIndex: 2000 }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <input
            type="text"
            className='form-control'
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {filteredProducts.length > 0 && (
            <ul className="list-group mt-2">
              {filteredProducts.map(product => (
                <Link to={`/products/${product.id}`} key={product.id}>
                  <li
                    className="list-group-item"
                    style={{ backgroundColor: "#2c2c2c", color: "silver" }}
                    onClick={clearSearch}
                    data-bs-dismiss='modal'
                  >
                    {product.title}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
