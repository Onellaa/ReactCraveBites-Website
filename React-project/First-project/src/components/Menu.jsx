// import React from "react";
import React, { useState } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "./MenuItem";
import "./Menu.css";
import Cart from "./Cart";

export default function Menu() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem.name !== item.name));
  };

  return (
    <div className="menu-container">
      <div className="menu">
        <h1 className="menu-title">Our Menu</h1>
        <div className="menuList">
          {MenuList.map((menuItem, key) => {
            const isAdded = cart.some(
              (cartItem) => cartItem.name === menuItem.name
            );
            return (
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
                isAdded={isAdded}
                addToCart={() => addToCart(menuItem)}
                removeFromCart={() => removeFromCart(menuItem)}
              />
            );
          })}
        </div>
      </div>
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

// return (
//   <div className="menu">
//     <h1 className="menu-title">Our Menu</h1>
//     <div className="menuList">
//       {MenuList.map((menuItem, key) => (
//         <MenuItem
//           key={key}
//           image={menuItem.image}
//           name={menuItem.name}
//           price={menuItem.price}
//         />
//       ))}
//     </div>
//   </div>
// );
