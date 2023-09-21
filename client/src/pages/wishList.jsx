import React, { useState, useEffect } from 'react';
import AuthMiddleware from './authMiddleware';
import Itemcard from "../pages/components/itemCard";
import Layout from './components/layout';
import WishListCard from './components/wishListCard';
const WishList = () => {

    const [wishListItems, setWishListItems] = useState([]);
    const { user, loading } = AuthMiddleware();
    const fetchWishListItems = async () => {
        try {
            // Make a GET request to fetch cart data from your server
            const userId = user?.uid;
            const response = await fetch(`http://localhost:4000/wishlist/get-wishlist?userId=${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });


            if (response.ok) {
                // If the response is successful, parse the JSON data
                const data = await response.json();
                console.log("wish list items", data.wishListItem);
                setWishListItems(data.wishListItem);
            } else {
                // Handle errors or empty cart data
            }
        } catch (error) {
            console.error('Error fetching wishlist items data:', error);
        }
    };

    useEffect(() => {
        if (user) {
            fetchWishListItems();
        }
    }, [user]);

    return (
        <Layout>
            <div className='min-h-screen'>
                {wishListItems.length === 0 && <h1>product you like will appear here</h1>}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    {wishListItems?.map((item) => (
                        <div key={item.id}>
                            <WishListCard kit={item} />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default WishList;
