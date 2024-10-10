const initialState={
    cartData:[],
};

export const Reducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            const existingProduct = state.cartData.find(
                (item) => item.id === action.payload.id
            );

            if (existingProduct) {
                if (existingProduct.quantity<5){
                    const productQuantity = state.cartData.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                        return { ...state, cartData: productQuantity };
                }
            }else{
                return{...state,cartData:[...state.cartData,action.payload]};
            };
        case "REMOVE_FROM_CART":
            const filterProduct=state.cartData.filter((cartProduct)=>cartProduct.id!==action.payload);
            return{
                ...state,cartData:filterProduct,
            }

        case "INCREMENT_QUANTITY":
            return{...state,cartData:state.cartData.map((product)=>
                product.id===action.payload && product.quantity<5 ? {...product,quantity:product.quantity+1} : product
            )
        };
        
        case "DECREMENT_QUANTITY": 
            return{...state,cartData:state.cartData.map(product=>{
                if(product.id===action.payload){
                    if (product.quantity>1){
                        return{...product,quantity:product.quantity-1}
                    }else{
                        return null
                    }
                }
                return product;
            }).filter(product=>product!=null)
            };
                

        default:
            return state;
    }
};