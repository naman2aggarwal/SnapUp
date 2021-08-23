import axios from "axios";

const getProductById = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3000/Products/${id}`);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getAllProducts = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/Products`);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllProducts, getProductById };
