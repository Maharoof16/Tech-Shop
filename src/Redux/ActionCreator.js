import {ActionType} from './ActionType';

export const addToCart=(product)=>{
    return{type:ActionType.ADD_TO_CART, payload: product};
};

export const removeFromCart=(id)=>{
    return{type:ActionType.REMOVE_FROM_CART,payload:id};
};