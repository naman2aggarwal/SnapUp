import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productActions } from "../actions/index";
import { useDispatch } from "react-redux";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3000/Cart");
      const data = await response.json();
      setCart(data);
      dispatch({
        type: productActions.setData,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="cart">
      {cart.length === 0 ? (
        <h1>Cart is empty</h1>
      ) : (
        cart.map((product, index) => {
          return (
            <div key={index}>
              <div className="my-cart">
                <div>
                  <div>
                    <div className="card ">
                      <img src={product.image} alt="image" />
                      <div className="product">
                        <a href="#" className="product-name">
                          {product.title}
                        </a>
                        <p className="card-text">{product.description}</p>
                        <span className="product-price">
                          ₹{Math.round(product.price)}
                        </span>
                      </div>
                    </div>
                    <div className="product-buttons">
                      <button
                        className="minus"
                        onClick={() => {
                          if (product.quantity > 1) {
                            dispatch({
                              type: productActions.decQuantity,
                              payload: {
                                id: product.id,
                                setCart: setCart,
                              },
                            });
                          }
                        }}
                      >
                        -
                      </button>
                      <div className="quantity">
                        <input
                          className="quantity-no"
                          onChange={() => {}}
                          type="text"
                          value={product.quantity}
                        />
                      </div>
                      <button
                        className="plus"
                        onClick={() => {
                          dispatch({
                            type: productActions.incQuantity,
                            payload: {
                              id: product.id,
                              setCart: setCart,
                            },
                          });
                        }}
                      >
                        +
                      </button>
                      <div
                        className="remove"
                        onClick={() => {
                          dispatch({
                            type: productActions.removeItem,
                            payload: product.id,
                          });
                        }}
                      >
                        REMOVE
                      </div>
                      <Link
                        className="btn btn-success"
                        to={{ pathname: "/confirm", item: { id: product.id } }}
                        onClick={() => {
                          dispatch({
                            type: productActions.placeOrder,
                            payload: product.id,
                          });
                        }}
                      >
                        PLACE ORDER
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-details">
                <span className="price-head">PRICE DETAILS</span>
                <div>
                  <div className="details">
                    <div className="random">
                      <span>Quantity</span>
                      <span> {product.quantity}</span>
                    </div>
                    <div className="random">
                      <span>Deleivery Charges </span> <span> Free</span>
                    </div>
                    <div className="random">
                      <span>Total Amount({product.quantity} item)</span>{" "}
                      <span>
                        ₹
                        {Math.round(product.total) || Math.round(product.price)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
