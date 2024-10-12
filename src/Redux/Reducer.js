const initialState={
    cartData: JSON.parse(localStorage.getItem('cartData')) || [],
};

export const Reducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            const existingProduct = state.cartData.find(
                (item) => item.id === action.payload.id
            );
            
            let updatedCartData;

            if (existingProduct) {
                if (existingProduct.quantity < 5) {
                    updatedCartData = state.cartData.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                } else {
                    updatedCartData = state.cartData; // No change
                }
            } else {
                updatedCartData = [...state.cartData, action.payload];
            };
            localStorage.setItem('cartData', JSON.stringify(updatedCartData));
            return { ...state, cartData: updatedCartData };
            
        case "REMOVE_FROM_CART":
            const filterProduct=state.cartData.filter((cartProduct)=>cartProduct.id!==action.payload);
            localStorage.setItem('cartData', JSON.stringify(filterProduct));
            return{
                ...state,cartData:filterProduct,
            }

        case "INCREMENT_QUANTITY":
            const increment=state.cartData.map((product)=>
                product.id===action.payload && product.quantity<5 ? {...product,quantity:product.quantity+1} : product
            )
            localStorage.setItem('cartData', JSON.stringify(increment));
            return{...state,cartData:increment};
        
        case "DECREMENT_QUANTITY":
            const decrement= state.cartData.map(product=>{
                if(product.id===action.payload){
                    if (product.quantity>1){
                        return{...product,quantity:product.quantity-1}
                    }else{
                        return null
                    }
                }
                return product;
            }).filter(product=>product!=null)
            localStorage.setItem('cartData', JSON.stringify(decrement));
            return{...state,cartData:decrement};
                

        default:
            return state;
    }
};

 