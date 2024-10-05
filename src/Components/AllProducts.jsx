import React from 'react';
import productsData from './Products.json';
import { Link } from 'react-router-dom';

const AllProducts = () => {

    const getImageSrc = (imagePath) => {
        return require(`${imagePath}`);
    };

  return (
    <>
     {productsData.length>0?(
          <div className="container-fluid bg-black text-white">
          <div className="row mx-5">
              <div className="col-md-2">
                  <h5>Filter</h5>
              </div>
              <div className="col-md-10">
                  <div className="row">
                      {productsData.map(product => (
                          <div className="col-md-4" key={product.id}>
                              <div className="card mb-4 bg-black text-white border-light ">
                              <Link to={`/products/${product.id}`}>
                                  <img src={getImageSrc(product.images[0])} className="card-img-top" alt={product.title} />
                            </Link>
                                  <div className="card-body">
                                      <h5 className="card-title">{product.title}</h5>
                                      <p className="card-text">{product.price}</p>
                                      <button className="btn btn-danger">Add to Cart</button>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>):(<div></div>)}
    </>
  )
}

export default AllProducts
