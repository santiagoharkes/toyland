import * as cartActions from "./cartConstants";
import { addItemToCart, removeItemsToCart, sumItems } from "./cartUtils";

const storage = localStorage.getItem("mercat-cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  showCart: false,
  cartItems: storage,
  ...sumItems(storage),
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActions.TOGGLE_CART:
      return {
        ...state,
        showCart: !state.showCart,
      };

    case cartActions.ADD_ITEM:
      return {
        ...state,
        ...addItemToCart(state.cartItems, action.payload),
      };

    case cartActions.REMOVE_ITEM:
      return {
        ...state,
        ...removeItemsToCart(state.cartItems, action.payload),
      };

    case cartActions.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
