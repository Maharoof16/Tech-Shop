import {Action_Type} from './ActionType';

export const addToCart=(product)=>{
    return{type:Action_Type.ADD_TO_CART, payload: product};
};

export const removeFromCart=(id)=>{
    return{type:Action_Type.REMOVE_FROM_CART,payload:id};
};