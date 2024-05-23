import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";

export default function MenuItem({
  image,
  name,
  price,
  isAdded,
  addToCart,
  removeFromCart,
}) {
  return (
    <div className="menuItem">
      <div>
        <img src={image} alt={name} className="menuItem-image" />
      </div>
      <h2 className="menuItem-name">{name}</h2>
      <p className="menuItem-price">${price.toFixed(2)}</p>

      <div className="cart-buttons">
        {!isAdded ? (
          <button className="cart-button" onClick={addToCart}>
            <FontAwesomeIcon icon={faCartPlus} />
          </button>
        ) : (
          <button className="cart-button" onClick={removeFromCart}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        )}
      </div>
    </div>
  );
}
