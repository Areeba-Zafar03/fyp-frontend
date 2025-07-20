import React from 'react';

// CartIcon component that triggers the cart slider
const CartIcon = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        fontSize: '24px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      🛒 {/* You can replace this with an SVG or a different icon */}
    </button>
  );
};

export default CartIcon;
