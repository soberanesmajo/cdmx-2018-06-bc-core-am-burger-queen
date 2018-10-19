import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Order from './components/order/Order';

const App = () => (<Router basename = {process.env.PUBLIC_URL}>
  <div>
    <Switch>
      <Route
        path = '/'
        component = {Login} exact
      />

      <Route
        path = '/order'
        component = {Order}
      />

    </Switch>
  </div>
</Router>)

export default App;
