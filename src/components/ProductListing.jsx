import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadProducts } from "../actions";
import Loader from "./Loader";

const ProductListing = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);

  useEffect(() => {
    dispatch(LoadProducts());
  }, []);
  return (
    <main className="product-listing" id="product-listing">
      {productList ? <h1>Hello</h1> : <Loader />}
    </main>
  );
};

export default ProductListing;
