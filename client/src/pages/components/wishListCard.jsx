import React from 'react';
import { BsCurrencyRupee } from 'react-icons/bs';
import { TiDeleteOutline } from 'react-icons/ti';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {showErrorToast,showSuccessToast } from "./toast";
const WishListCard = ({ kit }) => {

  const removeFromWishList = async () => {

    try {
      // Use the cart item's _id property to identify the item to delete
      const itemIdToDelete = kit._id; // Assuming _id is the correct identifier

      // Make a DELETE request to the server to delete the item from the database
      const response = await fetch(`http://localhost:4000/wishlist/delete-from-wishlist/${itemIdToDelete}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
      showSuccessToast('removed from wish list')
      } else {
        // Handle the case where the delete request fails
        console.error('Failed to delete item from cart:', response.statusText);
      }
    } catch (error) {
    showErrorToast('something went wrong')
    }
  };



  return (
    <div className="bg-white rounded-md shadow-lg overflow-hidden">

    {/* Product Image */}
      <img
        src={kit.kitImage['home']} // Replace with your product image URL
        alt="Product Name"
        className="w-full h-48 object-cover"
      />

      {/* Product Details */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 text-hd">{kit.title}</h2>
        <p className="text-txt opacity-70 text-sm mb-4">{kit.description.slice(0,100)}</p>
        <div className="flex justify-between items-center">
          <p className="text-lg text-txt font-semibold flex items-center"><BsCurrencyRupee/>{kit.price}</p>
          <div className="flex space-x-4">
            {/* Remove from Wishlist */}
            <button 
            onClick={removeFromWishList}
            className="text-red-500 hover:text-red-600" aria-label="Remove from Wishlist">
              <TiDeleteOutline size={24} />
            </button>

            {/* Add to Cart */}

            <button className="text-hd hover:text-act" aria-label="Add to Cart">
              <Link to={`/product/${encodeURIComponent(kit.title)}`} state={{ kit }}>
                <FiShoppingCart size={24} />
              </Link>
            </button>

          </div>
        </div>
      </div>
    </div>

  );
}

export default WishListCard;
