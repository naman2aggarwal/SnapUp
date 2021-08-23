import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, price, title, image } = product;
  return (
    <div className="product text-center col-lg-3 col-md-4 col-12">
      <img className="img-fluid mb-3" src={image} alt={title} />

      <h5 className="p-name">{title}</h5>
      <h4 className="p-price">${price}</h4>
      <button className="buy-btn">
        <Link to={`products/${id}`}>View</Link>
      </button>
    </div>
  );
};

export default ProductCard;
