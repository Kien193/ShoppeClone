import React, { Component } from 'react';
import Menu from './MenuComponent';
import Inform from './InformComponent';
import Home from './HomeComponent';
import Product from './ProductComponent';
import { Routes, Route, Navigate } from 'react-router-dom';


class Main extends Component {
  render() {
    return (
      <div className="body-customer">
        <Menu />
        <Inform />
        <Routes>
          <Route path='/' element={<Navigate replace to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/product/category/:cid' element={<Product />} />
        </Routes>
      </div>
    );
  }
}
export default Main;