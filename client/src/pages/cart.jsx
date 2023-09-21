import React, { useEffect } from 'react';
import CartCard from './components/cartCard';
import { useCart } from '../cartContext';
import { BsCurrencyRupee } from 'react-icons/bs';
import AuthMiddleware from './authMiddleware';
import Layout from './components/layout';


const Cart = () => {
    const { cartItems, calculateTotalPrice } = useCart(); // Update this line
    const { addToCart } = useCart();
    const { user, loading } = AuthMiddleware();
    // Modify the checkout function to send the correct data structure in the request body
    const checkout = async () => {
        // Create an array of items with the expected properties
        const items = cartItems.map((item) => ({
            price: item.id,
            name:item.title,
            quantity: item.count,
            currency: 'INR',
            kitImage:item.kitImage,
            color:item.color,
            size:item.size,
            cost:item.count * item.price,
            userId:user?.uid,
        }));

        await fetch('http://localhost:4000/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ items }), // Send the items array in the request body
        })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                if (response.url) {
                    window.location.assign(response.url); // Forwarding user to Stripe
                }
            });
    };

    useEffect(() => {
        // Define an async function to fetch cart data
        const fetchCartData = async () => {
            try {
                // Make a GET request to fetch cart data from your server
                const userId = user?.uid;
                const response = await fetch(`http://localhost:4000/cart/get-cart?userId=${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });


                if (response.ok) {
                    // If the response is successful, parse the JSON data
                    const data = await response.json();
                    for (let i = 0; i < data.cartItems.length; i++) {
                       
                        addToCart(data.cartItems[i]);
                    }
                } else {
                    // Handle errors or empty cart data
                }
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        };

        // Call the fetchCartData function when the component mounts
        fetchCartData();
    }, [user]);

    return (
        <Layout>
        <div className='min-h-screen'>
            <div className='pt-5'>
                {cartItems.map((team, index) => (
                    <div key={index} className=''>
                        <CartCard kit={team} />
                    </div>
                ))}
            </div>
            <div className='md:items-center mt-10 border-t-2 border-hd flex justify-around px-20 py-5'>
                <h1 className='w-2/4 flex gap-1 items-center justify-center text-gray-700 text-2xl font-semibold'>total: <BsCurrencyRupee />{calculateTotalPrice().toFixed(2)}</h1>
                <button
                    onClick={checkout}
                    className="mt-2 mr-4 flex h-[40px] w-2/4 items-center justify-center rounded-md bg-hd text-white">
                    <span className="ml-2 font-medium">proceed to checkout</span>
                </button>
            </div>
        </div>
        </Layout>
    );
}

export default Cart;
