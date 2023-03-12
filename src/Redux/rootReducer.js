import { combineReducers } from "redux";
import AddProductReducer from "./AddProduct/reducer";
import shoppingCartReducer from "./Shopping/reducer";

const rootReducer = combineReducers({
    products: AddProductReducer,
    shoppingCart: shoppingCartReducer,
});

export default rootReducer;