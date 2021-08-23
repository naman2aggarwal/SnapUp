import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetProductDetail } from "../actions";
import Loader from "./Loader";

const Product = ({ product, quantity, setQuantity }) => {
  const { title, price, description, image } = product;
  return (
    <>
      <div className="product-detail-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-detail-info">
        <div className="product-detail-title">{title}</div>
        <div className="product-detail-desc">{description}</div>
        <div className="product-detail-price">{price}</div>
        <div className="product-detail-cart">
          <button
            className="inc-prod-quant"
            onClick={() => {
              setQuantity((state) => state + 1);
            }}
          >
            +
          </button>
          <span>{quantity}</span>
          <button
            className="dec-prod-quant"
            onClick={() => {
              setQuantity((state) => state - 1);
            }}
          >
            -
          </button>
          <button className="add-to-cart">Add to cart</button>
        </div>
      </div>
    </>
  );
};

const ProductDetail = () => {
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(GetProductDetail(id));
  }, []);

  return (
    <div className="product-detail">
      {selectedProduct ? (
        <Product
          product={selectedProduct}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProductDetail;
