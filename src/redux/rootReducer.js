import { combineReducers } from "redux";

import cartReducer from "./cart/cartReducer";
import productsReducer from "./products/productsReducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});
