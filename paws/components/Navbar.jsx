import React from 'react';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { totalQuantities, toggleCart } = useStateContext();

  return (
    <div className="navbar-container">
      <Link href="/">
        <div className="logo">
          <span>Industrial</span> Supply Co.
        </div>
      </Link>

      <div className="cart-icon" onClick={toggleCart}>
        <FiShoppingCart size={24} />
        {totalQuantities > 0 && (
          <span className="cart-count">{totalQuantities}</span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
