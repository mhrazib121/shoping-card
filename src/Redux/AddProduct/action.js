import { ADDED, DECREMENT, INCREMENT } from "./actionTypes"

export const addProduct = (productData) => {
    return {
        type: ADDED,
        payload: productData,
    }
};

export const incrementStock = (productId, value) => {
    return {
        type: INCREMENT,
        payload: {
            id: productId,
            value,
        },
    };
};
export const decrementStock = (productId) => {
    return {
        type: DECREMENT,
        payload: productId,
    };
};