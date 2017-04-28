import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import AddCoinPage from './components/coin/CoinPage';
import ManageCoinPage from './components/coin/ManageCoinPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="coins" component={AddCoinPage} />
    <Route path="coins/:id" component={AddCoinPage} />
    <Route path="coin" component={ManageCoinPage} />
  </Route>
);
