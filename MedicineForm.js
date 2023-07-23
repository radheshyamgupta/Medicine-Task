import React, { useState ,useContext} from 'react';
import  CartContext  from "./ContexApi/CartContex";
import YourCart from './YourCart';
export default function MedicineForm() {
  const [medicine, setMedicine] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const { addItemToCart } = useContext(CartContext);

  const addHandler = () => {
    // Create a new medicine object
    const newMedicine = {
      medicine: medicine,
      description: description,
      price: price,
    };

    // Add the medicine to the cart
    addItemToCart(newMedicine);

    // Clear the input fields after adding the item
    setMedicine('');
    setDescription('');
    setPrice('');
  };

  return (
    <>
     <div>
      <label htmlFor='medicine'>Medicine</label>
      <input id='medicine' value={medicine} onChange={(e) => setMedicine(e.target.value)} />
      <label htmlFor='desc'>Description</label>
      <input id='desc' value={description} onChange={(e) => setDescription(e.target.value)} />
      <label htmlFor='price'>Price</label>
      <input id='price' value={price} onChange={(e) => setPrice(e.target.value)} />
      <button onClick={addHandler}>Add</button> 
       
    </div>
  <YourCart /> 
    </>
   
  );
}
