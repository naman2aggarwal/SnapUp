const addToCart = (id, num) => {
  async function fetchData(id) {
    try {
      const response = await fetch(`http://localhost:3000/Products/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  return async (dispatch) => {
    var product = await fetchData(id);
    console.log(product);
    fetch("http://localhost:3000/Orders", {
      method: "post",
      body: JSON.stringify({
        id: product.id,
        quantity: num,
        category: product.category,
        description: product.description,
        image: product.image,
        price: product.price,
        title: product.title,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data));

    return dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };
};

export default addToCart;
