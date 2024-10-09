import React,{useEffect, useState} from 'react';
import productsData from '../Assets/json/Products.json';
import { Link } from 'react-router-dom';
import filterData from "../Assets/json/FilterData.json";


const AllProducts = () => {
    const [allProducts] = useState(productsData); 
    const [products, setProducts] = useState(productsData); 
    const [selectedBrand, setBrands] = useState([]);
    const [selectedCategory,setCategories]=useState([]);
    const[priceRange,setRange]=useState(19990);

    const handleBrand = (brand) => {
        setBrands((prev) =>
            prev.includes(brand) ? prev.filter((item) => item !== brand) : [...prev, brand]
        );
    };

    const handleCategory=(category)=>{
        setCategories((prev) =>
            prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category]
        );
    }

    const handlePriceChange = (e) => {
        setRange(Number(e.target.value));
    };

    useEffect(() => {
        let filteredProducts = allProducts;
        if (selectedBrand.length > 0) {
            filteredProducts = filteredProducts.filter((product) =>
                selectedBrand.includes(product.brand)
            );
        }
        
        if (selectedCategory.length > 0) {
            filteredProducts = filteredProducts.filter((product) =>
                selectedCategory.includes(product.category)
            );
        }
        
       filteredProducts=filteredProducts.filter((product)=>product.finalPrice<=priceRange)
        setProducts(filteredProducts);
    }, [allProducts,selectedBrand, selectedCategory,priceRange]);
    
    const getImageSrc = (imagePath) => {
        return require(`${imagePath}`);
    };


  return (
    <>
     {productsData.length>0?(
          <div className="container-fluid bg-black text-white">
          <div className="row mt-5 pt-5">
              <div className="col-md-2 mt-5 " >
              <div className="bg-dark text-light p-3 overflow-auto" style={{ maxHeight: "70vh" }}>
              <h3 className="text-white">Sort By</h3>
              {filterData.sortMenu.map((item)=>(
                <p>{item.title}</p>
              ))}
        <h3 className="text-white">Brands</h3>

        {filterData.brandsMenu.map((product)=>(
            <div className="form-check mb-2" key={product.id}>
            <input className="form-check-input" type="checkbox" id={product.label} checked={selectedBrand.includes(product.label)} onChange={()=>handleBrand(product.label)} />
            <label className="form-check-label" htmlFor={product.label}>{product.label}</label>
          </div>
        ))}

        <h3 className="text-white">Categories</h3>
        {filterData.categoryMenu.map((product)=>(
            <div className="form-check mb-2" key={product.id}>
            <input className="form-check-input" type="checkbox" id={product.label} checked={selectedCategory.includes(product.label)} onChange={()=>handleCategory(product.label)}/>
            <label className="form-check-label" htmlFor={product.label}>{product.label}</label>
          </div>
        ))}

        <h3>Price</h3>
        <label class="form-label" for="range">{priceRange}</label>
        <input type="range" class="form-range" min="449" max="19990"  step="500" value={priceRange} onChange={handlePriceChange} id='range'></input>
                </div>  
              </div>
              <div className="col-md-10 mt-5" >
                  <div className="row">
                      {products.map(product => (
                          <div className="col-md-3" key={product.id}>
                              <div className="card mb-4 bg-black text-white border-light ">
                              <Link to={`/products/${product.id}`}>
                                  <img src={getImageSrc(product.images[0])} className="card-img-top" alt={product.title} />
                            </Link>
                                  <div className="card-body">
                                      <h5 className="card-title">{product.title}</h5>
                                      <p className="card-text">{product.finalPrice}</p>
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
