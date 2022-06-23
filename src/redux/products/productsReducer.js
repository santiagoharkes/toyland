import * as productsConstants from "./productsConstants";

const INITIAL_STATE = {
  products: [],
  loading: false,
  error: null,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productsConstants.FETCH_PRODUCTS_START:
      return {
        ...state,
        loading: true,
      };

    case productsConstants.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...action.products],
      };

    case productsConstants.FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default productsReducer;
