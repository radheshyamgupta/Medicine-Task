import React, { useContext } from 'react';
import CartContext  from "./ContexApi/CartContex"

function MedicineDisplay() {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Medicine List</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <strong>Medicine: </strong> {item.medicine},{' '}
            <strong>Description: </strong> {item.description},{' '}
            <strong>Price: </strong> {item.price}
            <button>ADD TO CART</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MedicineDisplay;
