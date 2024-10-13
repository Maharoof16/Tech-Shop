import React,{useEffect, useState} from 'react';
import productsData from '../Assets/json/Products.json';
import { Link } from 'react-router-dom';
import filterData from "../Assets/json/FilterData.json";
import {useDispatch} from "react-redux";
import { addToCart } from '../Redux/ActionCreator';


const AllProducts = () => {
    const [allProducts] = useState(productsData); 
    const [products, setProducts] = useState(productsData); 
    const [selectedBrand, setBrands] = useState([]);
    const [selectedCategory,setCategories]=useState([]);
    const[priceRange,setRange]=useState(19990);
    const dispatch=useDispatch();

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
    


  return (
    <>
     {productsData.length>0?(
          <div className="container-fluid bg-black text-white">
          <div className="row mt-5 pt-5">
              <div className="col-md-2 mt-5 " >
              <div className="bg-dark text-light p-3 overflow-auto" style={{ maxHeight: "100vh" }}>
              <h3 className="text-white">Sort By</h3>
              {filterData.sortMenu.map((item)=>(
                <h6 style={{fontWeight:'lighter'}}>{item.title}</h6>
              ))}
        <h4>Filter By</h4>
        <h5 className="text-white">Brands</h5>

        {filterData.brandsMenu.map((product)=>(
            <div className="form-check mb-2" key={product.id}>
            <input className="form-check-input" type="checkbox" id={product.label} checked={selectedBrand.includes(product.label)} onChange={()=>handleBrand(product.label)} />
            <label className="form-check-label" htmlFor={product.label}>{product.label}</label>
          </div>
        ))}

        <h5 className="text-white">Category</h5>
        {filterData.categoryMenu.map((product)=>(
            <div className="form-check mb-2" key={product.id}>
            <input className="form-check-input" type="checkbox" id={product.label} checked={selectedCategory.includes(product.label)} onChange={()=>handleCategory(product.label)}/>
            <label className="form-check-label" htmlFor={product.label}>{product.label}</label>
          </div>
        ))}

        <h5>Price</h5>
        <label class="form-label" for="range">{priceRange}</label>
        <input type="range" class="form-range" min="449" max="19990"  step="500" value={priceRange} onChange={handlePriceChange} id='range'></input>
                </div>  
              </div>
              <div className="col-md-10 mt-5" >
                  <div className="row">
                  {products.map((product) => (
                 <div className="col-md-3 mb-4" key={product.id}>
                     <div className="card bg-black text-white border-secondary" >
                        <Link to={`/products/${product.id}`}>
                              <img src={require(`${product.images[0]}`)}  className="card-img-top p-3" style={{backgroundColor:"#121212"}} 
                                        alt={product.title} />
                        </Link>
                         <div className="card-body " >
                             <h5 className="card-title">{product.title}</h5>
                             <p>{product.info}</p>
                             <hr />
                            <h6 className='pb-2'>₹{product.finalPrice}<strike className='px-2'>₹{product.originalPrice}</strike></h6>
                            <button className= "btn text-white " style={{backgroundColor:"red",width:"100%"}}  onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
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
