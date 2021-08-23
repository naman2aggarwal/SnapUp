import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./components/NotFound";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductListing} />
          {
            //   <Route exact path="/about" component={About} />
            // <Route exact path="/contact" component={Contact} />
            // <Route exact path="/orders" component={Orders} />
            //   <Route exact path="/cart" component={Cart} />
          }
          <Route exact path="/products/:id" component={ProductDetail} />
          <Route path="/" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
