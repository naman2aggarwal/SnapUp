import logo from "../assets/logo.png";
import payment from "../assets/payment.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="mt-5 py-5">
      <div className="row container mx-auto pt-5">
        <div className="footer-one col-lg-3 col-md-6 col-12">
          <img src={logo} alt="logo" />
          <p className="pt-3">
            It is an e-commerce store made for devsnest super hackathon.
          </p>
        </div>
        <div className="footer-one col-lg-3 col-md-6 col-12 mb-3">
          <h5 className="pb-2">Featured</h5>
          <ul className="text-uppercase list-unstyled">
            <li>
              <Link to="/">MEN</Link>
            </li>
            <li>
              <Link to="/">WOMEN</Link>
            </li>
            <li>
              <Link to="/">BOYS</Link>
            </li>
            <li>
              <Link to="/">GIRLS</Link>
            </li>
            <li>
              <Link to="/">NEW ARRIVALS</Link>
            </li>
            <li>
              <Link to="/">SHOES</Link>
            </li>
            <li>
              <Link to="/">CLOTHES</Link>
            </li>
          </ul>
        </div>
        <div className="footer-one col-lg-3 col-md-6 col-12 mb-3">
          <h5 className="pb-2">Contact Us</h5>
          <div>
            <h6 className="text-uppercase">Address</h6>
            <p>Comet Team, Devsnest Server , Discord, INDIA</p>
          </div>
          <div>
            <h6 className="text-uppercase">Phone</h6>
            <p>(0674) 2765890</p>
          </div>
          <div>
            <h6 className="text-uppercase">MAIL</h6>
            <p>mail@example.com</p>
          </div>
        </div>
      </div>
      <div className="copyright mt-5">
        <div className="row container mx-auto">
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <img src={payment} alt="" />
          </div>
          <div className="col-lg-4 col-md-6 col-12 text-nowrap mb-2">
            <p>snapup eCommerce © 2021. All Rights Reserved</p>
          </div>
          <div className="col-lg-4 col-md-6 col-12 ">
            <Link to="/">
              <i className="fab fa-facebook-square"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-twitter-square"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
