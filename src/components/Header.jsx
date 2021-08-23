import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
        <img src={logo} alt="app-logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i id="bar" className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item">
              <HashLink to="/#home" className="nav-link">
                Home
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink to="/#product-listing" className="nav-link">
                Shop
              </HashLink>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                Contact Us
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                <i className="fad fa-shopping-bag"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
