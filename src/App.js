import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./components/NotFound";
import Order from "./components/Order";
import ConfirmOrder from "./components/ConfirmOrder";
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductListing} />
          
            <Route exact path="/orders" component={Order} />
            <Route exact path="/cart" component={Cart} />
          
          <Route exact path="/products/:id" component={ProductDetail} />
          <Route exact path="/confirm" component={ConfirmOrder } />
          
          <Route path="/" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
