export const cartCount = (state) => {
    return state.productData.cartData.length; 
};

export const totalOriginalPrice = (state) => {
    return state.productData.cartData.reduce((acc, product) => {
        return acc + (product.originalPrice * product.quantity);
    }, 0);
};


export const totalFinalPrice = (state) => {
    return state.productData.cartData.reduce((acc, product) => {
        return acc + (product.finalPrice * product.quantity);
    }, 0);
};