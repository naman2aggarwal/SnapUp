import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetProductDetail } from "../actions";
import Loader from "./Loader";

const Product = ({ product, quantity, setQuantity }) => {
  const { title, category, price, description, image } = product;
  return (
    <>
      <section className="container sproduct my-5 pt-5">
        <div className="row mt-5">
          <div className="col-lg-5 col-md-12 col-12">
            <img className="img-fluid w-100" src={image} alt={title} />
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <h6>Home/{category}</h6>
            <h3 className="py-4">{title}</h3>
            <h2>${price}</h2>
            <label htmlFor="prod-quantity" className="qty-label">
              Quantity:
            </label>
            <input
              id="prod-quantity"
              type="number"
              min="1"
              defaultValue="1"
              onChange={(e) => {
                console.log(e.target.value);
                setQuantity(e.target.value);
              }}
            />
            <button
              className="buy-btn"
              onClick={() => {
                console.log(quantity);
              }}
            >
              Add To Cart
            </button>
            <button className="buy-btn">Buy Now</button>
            <h4 className="mt-5 mb-5">Product Details:</h4>
            <span>{description}</span>
          </div>
        </div>
      </section>
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
    <div classNameName="product-detail">
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
