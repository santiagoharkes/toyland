import * as productsConstants from "./productsConstants";
import axios from "axios";

export const fetchProductsStart = () => {
  return {
    type: productsConstants.FETCH_PRODUCTS_START,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: productsConstants.FETCH_PRODUCTS_SUCCESS,
    products: products,
  };
};

export const fetchProductsFail = (error) => {
  return {
    type: productsConstants.FETCH_PRODUCTS_FAIL,
    error: error,
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsStart());

    try {
      const fetchedProducts = await axios.get(
        "https://amiiboapi.com/api/amiibo/?amiiboSeries=0x00"
      );

      dispatch(fetchProductsSuccess(fetchedProducts.data.amiibo));
    } catch (error) {
      dispatch(fetchProductsFail(error));
    }
  };
};
