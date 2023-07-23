import React from 'react';
import  MedicineForm from "./Component/MedicineForm"
import MedicineDisplay from './Component/MedicineDisplay';
import { CartProvider } from './Component/ContexApi/CartContex';

function App() {
  return (
    <div>
      <h1>Medicine Shop</h1>
      <CartProvider>
        <MedicineForm />
        <MedicineDisplay />
      </CartProvider>
    </div>
  );
}

export default App;
