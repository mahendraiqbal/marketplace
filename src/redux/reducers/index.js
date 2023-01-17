import { combineReducers } from "redux";
import cartData from "./cart";
import authReducer from "./auth";

const reducers = combineReducers({
    auth: authReducer,
    cart: cartData,
})

export default reducers;