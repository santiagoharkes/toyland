import * as cartConstants from "./cartConstants";
import {
  addItemToCart,
  deleteItemFromCart,
  removeItemFromCart,
  sumItems,
} from "./cartUtils";

const storage = localStorage.getItem("mercat-cart")
  ? JSON.parse(localStorage.getItem("mercat-cart"))
  : [];

const INITIAL_STATE = {
  showCart: false,
  cartItems: storage,
  ...sumItems(storage),
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartConstants.TOGGLE_CART:
      return {
        ...state,
        showCart: !state.showCart,
      };

    case cartConstants.ADD_ITEM:
      return {
        ...state,
        ...addItemToCart(state.cartItems, action.payload),
      };

    case cartConstants.REMOVE_ITEM:
      return {
        ...state,
        ...removeItemFromCart(state.cartItems, action.payload),
      };

    case cartConstants.DELETE_ITEM:
      return {
        ...state,
        ...deleteItemFromCart(state.cartItems, action.payload),
      };

    case cartConstants.CLEAR_CART:
      localStorage.removeItem("mercat-cart");

      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default cartReducer;
