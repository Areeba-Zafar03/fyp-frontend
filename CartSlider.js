import React from 'react';
import { useCart } from './CartContext';
import '../CartSlider.css'; // Linked CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTimes } from 'react-icons/fa';

const CartSlider = ({ isOpen, toggleCart }) => {
  const { cartItems } = useCart();

  return (
    <div className={`cart-slider ${isOpen ? 'open' : ''}`}>
      <div className="cart-slider-header d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
        <h4 className="mb-0">🛒 Your Cart</h4>
        <button className="btn btn-light btn-sm" onClick={toggleCart}>
          <FaTimes size={18} />
        </button>
      </div>

      <div className="cart-slider-body p-3">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="card mb-3 shadow-sm">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="card-title">{item.name}</h6>
                  <p className="card-text text-muted">Rs {item.price}</p>
                </div>
                <span className="badge bg-secondary">Qty: {item.quantity}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted mt-4">Your cart is empty 🧺</p>
        )}
      </div>

      <div className="cart-slider-footer p-3 border-top d-flex justify-content-end">
        <button className="btn btn-dark" onClick={toggleCart}>Close</button>
      </div>
    </div>
  );
};

export default CartSlider;
