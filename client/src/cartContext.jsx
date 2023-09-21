import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();
import AuthMiddleware from './pages/authMiddleware';
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { user, loading } = AuthMiddleware();
  const addToCart = (item) => {
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex((cartItem) => cartItem.id === item.id);
  
      if (existingItemIndex !== -1) {
        // Item already exists, update the count of the existing item
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingItemIndex].kitImage = item.kitImage;
        updatedCartItems[existingItemIndex].count = item.count;
        updatedCartItems[existingItemIndex].color = item.color;
        updatedCartItems[existingItemIndex].size = item.size;
        return updatedCartItems;
      } else {
        // Item doesn't exist, add it to the cart
        return [...prevCartItems, item];
      }
    });
  };
  
  const calculateTotalPrice = () => {
    // Iterate through cartItems and calculate the total price
    const totalPrice = cartItems.reduce((total, item) => {
      return total + item.price * item.count;
    }, 0);

    return totalPrice;
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart,calculateTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
