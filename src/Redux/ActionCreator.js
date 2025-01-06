import {ActionType} from './ActionType';

export const addToCart=(product)=>{
    return{type:ActionType.ADD_TO_CART, payload: product};
};

export const removeFromCart=(id)=>{
    return{type:ActionType.REMOVE_FROM_CART,payload:id};
};

export const incrementQuantity=(id)=>{
    return{type:ActionType.INCREMENT_QUANTITY,payload:id};
};

export const decrementQuantity=(id)=>{
    return{type:ActionType.DECREMENT_QUANTITY,payload:id};
};
