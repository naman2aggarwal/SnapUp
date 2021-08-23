import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function ConfirmOrder(props) {
  const location = useLocation();
  const { id } = location.item;
  const [address, setAddress] = useState("");
  const [flag, setFlag] = useState(true);
  const [product, setProduct] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch(`http://localhost:8000/Cart/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

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
          <span className="product-price">
            ₹{Math.round(product.total) || Math.round(product.price)}
          </span>
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
