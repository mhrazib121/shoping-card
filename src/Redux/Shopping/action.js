import { ADDEDTOCART, DECREMENT, DELETED, INCREMENT } from "./actionTypes"

export const AddedToCart = (productData) => {
    return {
        type: ADDEDTOCART,
        payload: productData,
    };
};
export const increment = (productId) => {
    return {
        type: INCREMENT,
        payload: productId,
    };
};
export const decrement = (productId) => {
    return {
        type: DECREMENT,
        payload: productId,
    };
};
export const deleted = (productId) => {
    return {
        type: DELETED,
        payload: productId,
    };
};