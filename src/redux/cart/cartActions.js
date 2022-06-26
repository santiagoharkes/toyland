import * as cartConstants from "./cartConstants";

export const toggleCart = () => ({
  type: cartConstants.TOGGLE_CART,
});

export const addItem = (item) => ({
  type: cartConstants.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartConstants.REMOVE_ITEM,
  payload: item,
});

export const clearCart = () => ({
  type: cartConstants.CLEAR_CART,
});

export const deleteItem = (item) => ({
  type: cartConstants.DELETE_ITEM,
  payload: item,
});
