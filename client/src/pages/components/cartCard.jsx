import React, { useState } from 'react';

import { BsTrash, BsCurrencyRupee } from 'react-icons/bs';
import { useCart } from '../../cartContext';
import { showErrorToast, showSuccessToast } from './toast';


const CartCard = ({ kit }) => {
  const { cartItems, addToCart } = useCart();


  const cartItem = cartItems.find((item) => item.id === kit.id);
  const [count, setCount] = useState(cartItem ? cartItem.count : 1);


  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      addToCart({ ...kit, count: count - 1 }); // Update the count in the cart
    }
  };

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
      addToCart({ ...kit, count: count + 1 }); // Update the count in the cart
    }
  };

  const removeFromCart = async () => {

    try {
      // Use the cart item's _id property to identify the item to delete
      const itemIdToDelete = cartItem._id; // Assuming _id is the correct identifier

      // Make a DELETE request to the server to delete the item from the database
      const response = await fetch(`http://localhost:4000/cart/delete-from-cart/${itemIdToDelete}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        addToCart({ ...kit, count: 0 });
        showSuccessToast('item removed from cart!')
      } else {
        // Handle the case where the delete request fails
       showErrorToast('something went wrong')
      }
    } catch (error) {
      showErrorToast('something went wrong')
    }
  };

  return (

    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 m-4 flex items-center">
      <img src={kit.kitImage} alt={kit.title} className="w-22 h-24 rounded-md mr-4" />
      <div className="flex-grow">
        <h1 className="text-hd text-lg font-semibold">{kit.title}</h1>
        <p className="text-txt  text-sm flex items-center gap-1"><p className='text-subhd'>Color:</p>{kit.color}</p>
        <p className="text-txt text-sm flex items-center"><p className='text-subhd mr-1'>Size:</p>{kit.size}</p>
        <p className="text-txt font-semibold flex items-center">
          <p className='font-medium text-subhd mr-1 text-sm'>Price: </p>
          <BsCurrencyRupee />
          {kit.price * count}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className='text-subhd text-sm'>Quantity</h1>
        <div className="flex items-center mt-2">
          <button
            onClick={handleDecrement}
            className="bg-transparent border border-subhd text-txt px-2 h-5 items-center flex  mr-2"
          >
            -
          </button>
          <p className="text-txt opacity-70">{count}</p>
          <button
            onClick={handleIncrement}
            className="bg-transparent border border-subhd text-txt px-2 h-5 items-center flex  ml-2"
          >
            +
          </button>
        </div>
        <div className="mt-2">
          <BsTrash onClick={removeFromCart} className="text-subhd cursor-pointer" />
        </div>
      </div>
    </div>


  );
}

export default CartCard;
