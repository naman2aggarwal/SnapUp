import React, { useState } from "react";
import productActions from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import Order from "./Order";

export default function Cart() {
  const [cart, setCart] = useState(true);
  const quantity = useSelector((state) => state.quantity);
  const dispatch = useDispatch();
  const discount = 10;
  const product = {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  };

  const [price, setPrice] = useState(Math.round(product.price));
  return (
    <div className="cart">
      <div className="my-cart">
        <div>
          {cart ? (
            <div>
              <div className="card ">
                <img src={product.image} alt="" />
                <div className="product">
                  <a href="#" className="product-name">
                    {product.title}
                  </a>
                  <p className="card-text">{product.description}</p>
                  <span className="product-price">₹{price}</span>
                </div>
              </div>
              <div className="product-buttons">
                <button
                  className="minus"
                  onClick={() => {
                    dispatch({ type: productActions.decQuantity });
                    if (quantity > 1) {
                      setPrice(Math.round(price - product.price));
                    }
                  }}
                >
                  -
                </button>
                <div className="quantity">
                  <input className="quantity-no" type="text" value={quantity} />
                </div>
                <button
                  className="plus"
                  onClick={() => {
                    dispatch({ type: productActions.incQuantity });
                    setPrice(Math.round(price + product.price));
                  }}
                >
                  +
                </button>
                <div className="remove">REMOVE</div>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    setTimeout(() => setCart(false), 500);
                  }}
                >
                  PLACE ORDER
                </button>
              </div>
            </div>
          ) : (
            <Order price={price} quantity={quantity} product={product} />
          )}
        </div>
      </div>

      <div className="product-details">
        <span className="price-head">PRICE DETAILS</span>
        <div>
          <div className="details">
            <div className="random">
              <span>Price ({quantity} item) </span> <span> ₹{price}</span>
            </div>
            <div className="random">
              <span>Discount </span> <span> ₹{discount}</span>
            </div>
            <div className="random">
              <span>Deleivery Charges </span> <span> Free</span>
            </div>
            <div className="random">
              <span>Total Amount</span> <span>₹{price - discount}</span>
            </div>
          </div>

          <div className="random">
            <span>You will save ₹{discount} on this order </span>
          </div>
        </div>
      </div>
    </div>
  );
}
