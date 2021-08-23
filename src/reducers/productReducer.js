const initialState = {
  selectedProduct: null,
  productList: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return { ...state, productList: action.payload };
    case "GET_PRODUCT_DETAIL":
      return { ...state, selectedProduct: action.payload };
    case "RESET_SELECTED_PRODUCT":
      return { ...state, selectedProduct: null };
    case "ERROR_OCCURED":
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};

export default productReducer;
