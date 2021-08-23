const CartReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_DATA":
      return (state = action.payload);

    case "INC_QUANTITY":
      let product = state.find((item) => item.id === action.payload.id);
      product.quantity += 1;
      product.total = product.price * product.quantity;
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      };
      fetch(`http://localhost:8000/Cart/${action.payload.id}`, requestOptions);
      return state;

    case "DEC_QUANTITY":
      let data = state.find((item) => item.id === action.payload.id);
      if (data.quantity > 1) {
        data.quantity -= 1;
        data.total -= data.price;
        const requestOptions = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };
        fetch(
          `http://localhost:8000/Cart/${action.payload.id}`,
          requestOptions
        );
      }
      return state;

    case "REMOVE_ITEM":
      async function deleteItem(url) {
        const response = await fetch(url, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        });
      }
      deleteItem(`http://localhost:8000/Cart/${action.payload}`);
      return state;

    default:
      return state;
  }
};

const OrderReducer = (state = [], action) => {
  switch (action.type) {
    case "PLACE_ORDER":
      async function fetchData() {
        try {
          const response = await fetch(
            `http://localhost:8000/Cart/${action.payload}`
          );
          const product = await response.json();

          async function deleteItem(url) {
            const response = await fetch(url, {
              method: "DELETE",
              headers: {
                "Content-type": "application/json",
              },
            });
          }

          deleteItem(`http://localhost:8000/Cart/${action.payload}`);

          const requestOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          };
          fetch(`http://localhost:8000/Orders`, requestOptions);
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
      return state;

    default:
      return state;
  }
};

const AddToCartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return (state = action.payload);
    default:
      return state;
  }
};

const initialState = {
  selectedProduct: null,
  productList: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return {
        ...state,
        productList: action.payload,
      };
    case "GET_PRODUCT_DETAIL":
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case "RESET_SELECTED_PRODUCT":
      return {
        ...state,
        selectedProduct: null,
      };
    case "ERROR_OCCURED":
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};

export { CartReducer, AddToCartReducer, OrderReducer, ProductReducer };
