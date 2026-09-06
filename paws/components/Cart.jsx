import React from 'react';
import Link from 'next/link';
import { useStateContext } from '../context/StateContext';

const Cart = () => {
  const {
    showCart,
    setShowCart,
    cartItems,
    totalPrice,
    toggleCartItemQuanitity,
    onRemove
  } = useStateContext();

  if (!showCart) return null;

  return (
    <>
      <div className="cart-overlay" onClick={() => setShowCart(false)} />
      <div className="cart-wrapper">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="cart-close" onClick={() => setShowCart(false)}>
            ✕
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item._id} className="cart-item">
                  <div className="item-info">
                    <p className="item-name">{item.name}</p>
                    <div className="item-quantity-controls">
                      <button
                        className="qty-btn"
                        onClick={() => toggleCartItemQuanitity(item._id, 'dec')}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => toggleCartItemQuanitity(item._id, 'inc')}
                      >
                        +
                      </button>
                      <button
                        className="remove-btn"
                        onClick={() => onRemove(item)}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                  <p className="item-price">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <Link href="/checkout">
              <button className="checkout-btn" onClick={() => setShowCart(false)}>
                Proceed to Checkout
              </button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
