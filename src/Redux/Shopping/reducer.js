import { ADDEDTOCART, DECREMENT, DELETED, INCREMENT } from "./actionTypes";
import { initialState } from "./initialState";

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDEDTOCART:
            const alreadyAdded = state.map((p) => p.id).includes(action.payload.id);

            if (alreadyAdded) {
                return state?.map((product) => {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            quantity: product.quantity + 1,
                        }
                    } else {
                        return product;
                    }
                })
            };
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    category: action.payload.category,
                    price: action.payload.price,
                    quantity: 1,
                    imgUrl: action.payload.imgUrl,
                }
            ];



        case INCREMENT:
            return state.map((product) => {
                if (product.id !== action.payload) {
                    return product;
                };
                return {
                    ...product,
                    quantity: product.quantity + 1,
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

        case DELETED:
            return state.filter(product => product.id !== action.payload);

        default:
            return state;
    }
};

export default shoppingCartReducer;