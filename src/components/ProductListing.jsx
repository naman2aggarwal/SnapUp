import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadProducts } from "../actions";
import Loader from "./Loader";
import ProductCard from "./ProductCard";
import { HashLink } from "react-router-hash-link";
import one from "../assets/brand/one.png";
import two from "../assets/brand/two.png";
import three from "../assets/brand/three.png";
import four from "../assets/brand/four.png";
import five from "../assets/brand/five.png";
import six from "../assets/brand/six.png";
import b_one from "../assets/banner/one.jpg";
import b_two from "../assets/banner/two.jpg";
import b_three from "../assets/banner/three.jpg";
const ProductCardList = ({ productList }) => {
  return (
    <div className="row mx-auto container-fluid">
      {productList.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

const ProductListing = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);

  useEffect(() => {
    dispatch(LoadProducts());
  }, []);
  return (
    <main className="product-listing">
      <section id="home">
        <div className="container">
          <h5>Fashion Essentials For Mens</h5>
          <h1>
            Up to<span> 70% Off</span>{" "}
          </h1>
          <p className="para">
            Sweater,Dress,Hoodies,T-shirt,Flip-flops,Shorts,
            <br />
            Jeans ,Shoes ,Coat ,Cap ,Socks ,Shirt,
            <br />
            Leather jackets & more
          </p>
          <button>
            <HashLink to="/#product-listing">Shop Now</HashLink>
          </button>
        </div>
      </section>

      <section id="brand" className="container">
        <div className="row m-0 py-5">
          <img
            className="img-fluid col-lg-2 col-md-4 col-6"
            src={one}
            alt="brand name"
          />
          <img
            className="img-fluid col-lg-2 col-md-4 col-6"
            src={two}
            alt="brand name"
          />
          <img
            className="img-fluid col-lg-2 col-md-4 col-6"
            src={three}
            alt="brand name"
          />
          <img
            className="img-fluid col-lg-2 col-md-4 col-6"
            src={four}
            alt="brand name"
          />
          <img
            className="img-fluid col-lg-2 col-md-4 col-6"
            src={five}
            alt="brand name"
          />
          <img
            className="img-fluid col-lg-2 col-md-4 col-6"
            src={six}
            alt="brand name"
          />
        </div>
      </section>

      <section id="new" className="w-100">
        <div className="row p-0 m-0">
          <div className="one col-lg-4 col-md-12 col-12 p-0">
            <img className="img-fluid" src={b_one} alt="" />
            <div className="details">
              <h2>Extreme Rare Sneakers</h2>
              <h4 className="design">Starting from ₹599 onwards...</h4>
            </div>
          </div>
          <div className="one col-lg-4 col-md-12 col-12 p-0">
            <img className="img-fluid" src={b_two} alt="" />
            <div className="details">
              <h3 className="design2">Up To 30% Off on</h3>
              <h2>Awesome Blank Outfit</h2>
            </div>
          </div>
          <div className="one col-lg-4 col-md-12 col-12 p-0">
            <img className="img-fluid" src={b_three} alt="" />
            <div className="details">
              <h2>Sportswear Up To 50% Off</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="product-listing" className="my-5 pb-5">
        <div className="container text-center mt-5 py-5">
          <h3>Our Featured</h3>
          <hr className="mx-auto" />
          <p>Here you can check out new products with fair price on SnapUp</p>
        </div>
        {productList ? (
          <ProductCardList productList={productList} />
        ) : (
          <Loader />
        )}
      </section>
    </main>
  );
};

export default ProductListing;
