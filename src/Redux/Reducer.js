const initialState={
    cartData:[]
}

export const Reducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return {}
        
        case "REMOVE_FROM_CART":
            return{}
        default:
            return state;
    }
};