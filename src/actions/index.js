import addToCart from "./CartActions";

import { getAllProducts, getProductById } from "../services/ProductService";

function LoadProducts() {
  return async (dispatch) => {
    function onSuccess(productList) {
      dispatch({ type: "LOAD_PRODUCTS", payload: productList });
      return productList;
    }
    function onError(error) {
      dispatch({ type: "ERROR_OCCURED", payload: error });
      return error;
    }
    try {
      const allProducts = await getAllProducts();
      return onSuccess(allProducts);
    } catch (error) {
      return onError(error);
    }
  };
}

function ResetSelectedProduct() {
  return {
    type: "RESET_SELECTED_PRODUCT",
  };
}

function GetProductDetail(id) {
  return async (dispatch) => {
    function onSuccess(productData) {
      dispatch({ type: "GET_PRODUCT_DETAIL", payload: productData });
      return productData;
    }
    function onError(error) {
      dispatch({ type: "ERROR_OCCURED", payload: error });
      return error;
    }
    try {
      const productInfo = await getProductById(id);
      return onSuccess(productInfo);
    } catch (error) {
      return onError(error);
    }
  };
}

const productActions = {
  incQuantity: "INC_QUANTITY",
  decQuantity: "DEC_QUANTITY",
  setData: "SET_DATA",
  removeItem: "REMOVE_ITEM",
  placeOrder: "PLACE_ORDER",
  addToCart: "addToCart",
};

export { LoadProducts, ResetSelectedProduct, GetProductDetail, productActions };
