
import React from "react";
const product=
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    date:"Aug 26 2020",
  }


function Order() {
  return (
   
    <div className="Order">
      <h1>Previous Order</h1>
    <div className="container">
      <h3>Deleivered on {product.date} </h3>
    <img src={product.image} alt="" />
    <div className="product">
                  <a  className="product-name">
                    <h1> {product.title}</h1>
                  </a>
                  <p className="card-text"><h5>{product.description}</h5></p>
                  <span className="product-price"><h3>₹{product.price}</h3></span>
                  </div >




    </div>
    </div>
    
  );
}

export default Order;
