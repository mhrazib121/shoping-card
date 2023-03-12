import { ADDED, DECREMENT, INCREMENT } from "./actionTypes";
import { initialState } from "./initialState";

const nextId = (state) => {
    const maxId = state.reduce((maxNum, product) => Math.max(product.id, maxNum), -1);
    return maxId + 1;
}

const AddProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            const { name, category, price, quantity, imgUrl } = action.payload;
            return [
                ...state,
                {
                    id: nextId(state),
                    name: name,
                    category: category,
                    price: price,
                    quantity: quantity,
                    imgUrl: imgUrl,
                }
            ]
        case INCREMENT:
            return state.map((product) => {
                if (product.id !== action.payload.id) {
                    return product;
                };
                return {
                    ...product,
                    quantity: product.quantity + action.payload.value,
                };
            });

        case DECREMENT:
            return state.map((product) => {
                if (product.id !== action.payload) {
                    return product;
                };
                return {
                    ...product,
                    quantity: product.quantity - 1,
                };
            });

        default:
            return state;
    }
};

export default AddProductReducer;