import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="main-container">
      <Navbar />
      <Cart />
      <div className="layout">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
