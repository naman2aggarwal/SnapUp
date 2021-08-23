import React, { useState, useEffect } from "react";

export default function Order() {
  const [orders, setOrders] = useState([]);
  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3000/Orders");
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(orders);
  return (
    <div>
      {orders.length === 0 ? (
        <h1>no orders</h1>
      ) : (
        orders.map((product, index) => {
          return (
            <div key={index}>
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
            </div>
          );
        })
      )}
    </div>
  );
}
