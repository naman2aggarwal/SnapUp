import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <header className="app-header">
      <h1 className="header-hero">
        <Link to="/">SnapUp Store</Link>
      </h1>
      <div className="nav-section">
        <HashLink to="/#product-listing-1" className="shop-section">
          Shop
        </HashLink>
        <Link to="/about" className="about-section">
          About
        </Link>
        <Link to="/contact" className="contact-section">
          Contact
        </Link>
        <Link to="/orders" className="orders-section">
          Orders
        </Link>
        <Link to="/cart" className="cart-section">
          Cart
        </Link>
      </div>
    </header>
  );
};

export default Header;
