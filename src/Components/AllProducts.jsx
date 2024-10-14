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
    const[sortBy,setSortBy]=useState('')
    const dispatch=useDispatch();
    const clearFilter=selectedBrand.length>0 || selectedCategory.length>0 || priceRange<19990 || sortBy!=='';

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

    const handleSort=(sortType)=>{
        setSortBy(sortType);
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
        
       filteredProducts=filteredProducts.filter((product)=>product.finalPrice<=priceRange);

       if (sortBy === 'Price(Lowest First)') {
        filteredProducts.sort((prev,next) => prev.finalPrice - next.finalPrice);
    } else if (sortBy === 'Price(Highest First)') {
        filteredProducts.sort((prev,next) => next.finalPrice - prev.finalPrice);
    } else if (sortBy === 'Top Rated') {
        filteredProducts=filteredProducts.filter((item)=>item.rateCount===5);
    }else if(sortBy === 'Featured'){
        filteredProducts=filteredProducts.filter(item=>item.tag === 'featured-product');
    }else if(sortBy==='Latest'){
        filteredProducts=filteredProducts.filter(item=>item.id<7)
    }
        setProducts(filteredProducts);
    }, [allProducts,selectedBrand, selectedCategory,priceRange,sortBy]);
    
   const clearAllFilters=()=>{
    setBrands([]);
    setCategories([]);
    setRange(19990);
    setSortBy('');
   }

  return (
    <>
     {productsData.length>0?(
          <div className="container-fluid bg-black text-white">
          <div className="row mt-5 pt-5">
              <div className="col-md-2 mt-5 " >
              <div className="bg-dark text-light p-3 overflow-auto" style={{ maxHeight: "100vh" }}>
              {clearFilter && (
                <button className='btn text-white px-3' style={{backgroundColor:'red'}} onClick={clearAllFilters}>Clear Filters</button>
            )}
              <h5 className="text-white border-bottom p-2 ">Sort By</h5>
              {filterData.sortMenu.map((item,index)=>(
                <p key={index} className='my-2' style={{cursor:'pointer',color:sortBy === item.title ? 'red' : 'white'}} onClick={()=>handleSort(item.title)}>{item.title}</p>
              ))}
        <h5 className='border-bottom mt-5 p-2 mb-3'>Filter By</h5>
        <h6 className="text-white">Brands</h6>

        {filterData.brandsMenu.map((product)=>(
            <div className="form-check" key={product.id}>
            <input className="form-check-input" type="checkbox" id={product.label} checked={selectedBrand.includes(product.label)} onChange={()=>handleBrand(product.label)} />
            <label className="form-check-label" htmlFor={product.label}>{product.label}</label>
          </div>
        ))}

        <h6 className="text-white mt-4">Category</h6>
        {filterData.categoryMenu.map((product)=>(
            <div className="form-check mb-2" key={product.id}>
            <input className="form-check-input" type="checkbox" id={product.label} checked={selectedCategory.includes(product.label)} onChange={()=>handleCategory(product.label)}/>
            <label className="form-check-label" htmlFor={product.label}>{product.label}</label>
          </div>
        ))}

        <h6 className='mt-4'>Price</h6>
        <label class="form-label" for="range">₹ {priceRange}</label>
        <input type="range" class="form-range" min="449" max="19990"  step="500" value={priceRange} onChange={handlePriceChange} id='range'></input>
                </div>  
              </div>
              <div className="col-md-10 mt-5" >
                  <div className="row">
                  {products.map((product) => (
                 <div className="col-md-3 mb-4" key={product.id}>
                     <div className="card bg-black text-white border-secondary" style={{minHeight:'100%'}}>
                        <Link to={`/products/${product.id}`}>
                              <img src={require(`${product.images[0]}`)}  className="card-img-top p-3" style={{backgroundColor:"#121212"}} 
                                        alt={product.title} />
                        </Link>
                         <div className="card-body " >
                             <h5 className="card-title">{product.title}</h5>
                             <p>{product.info}</p>
                             <hr />
                            <h6 className='pb-2'>₹{product.finalPrice}<strike className='px-2 text-secondary'>₹{product.originalPrice}</strike></h6>
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
