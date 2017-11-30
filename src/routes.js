import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoinListPage from './components/coin/CoinPage';
import ManageCoinPage from './components/coin/ManageCoinsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="list" component={CoinListPage} />
    <Route path="coin" component={ManageCoinPage} />
    <Route path="coin/:id" component={ManageCoinPage} />
  </Route>
);
