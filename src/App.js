import React from "react";
import "./App.css";
import Cart from './components/Cart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Order from "./components/Order";
import ConfirmOrder from "./components/ConfirmOrder";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Cart />
          </div>
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/order">
          <Order />
        </Route>
        <Route exact path="/confirm">
          <ConfirmOrder />
        </Route>
      </Switch>

    </Router>
  )

}

export default App;
