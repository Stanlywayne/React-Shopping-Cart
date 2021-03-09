import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from '../screens/cart';
import Products from '../screens/products';

class Navigation extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    )
  }
}
export default Navigation;