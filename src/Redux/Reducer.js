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
                const productQuantity = state.cartData.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
                    return { ...state, cartData: productQuantity };
            }else{
                return{...state,cartData:[...state.cartData,action.payload]};
            };
        
        
        case "REMOVE_FROM_CART":
            const filterProduct=state.cartData.filter((cartProduct)=>cartProduct.id!==action.payload);
            return{
                ...state,cartData:filterProduct,
            }
        default:
            return state;
    }
};