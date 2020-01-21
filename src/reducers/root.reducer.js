import productReducer from "./products.reducer";
import {combineReducers} from "redux";

const rootReducers = combineReducers({
    product: productReducer
});
export default rootReducers;
