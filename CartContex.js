import React, { createContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const cartContextValue = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
