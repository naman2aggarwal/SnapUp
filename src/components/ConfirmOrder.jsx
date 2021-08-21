import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ConfirmOrder() {
  const [address, setAddress] = useState("");
  const [flag, setFlag] = useState(true);
  const product = {
    total: 439.8,
    quantity: 4,
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  };
  function handleSubmit() {
    localStorage.setItem("address", JSON.stringify(address));
  }
  return (
    <div>
      <div className="card ">
        <img src={product.image} alt="image" />
        <div className="product">
          <a href="#" className="product-name">
            {product.title}
          </a>
          <p className="card-text">{product.description}</p>
          <span className="product-price">₹{Math.round(product.total)}</span>
        </div>
      </div>
      {localStorage.getItem("address") && flag === true ? (
        <div>
          <address>{localStorage.getItem("address")}</address>
          <p>do you want to continue with this address</p>
          <Link className="btn btn-primary" to="/order">
            Yes
          </Link>
          <button className="btn btn-danger" onClick={() => setFlag(false)}>
            No
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label>Enter your Address</label>
            <textarea
              className="form-control"
              rows="3"
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>
          <Link
            className="btn btn-success"
            to="/order"
            onClick={() => handleSubmit()}
          >
            Confirm Order
          </Link>
        </div>
      )}
    </div>
  );
}
