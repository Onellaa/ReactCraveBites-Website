import React from "react";
import "./Cart.css";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <p>{item.name}</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <button
              onClick={() => removeFromCart(item)}
              className="cart-item-remove"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
