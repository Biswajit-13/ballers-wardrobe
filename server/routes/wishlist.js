const express = require('express');
const router = express.Router();
const wishListItemSchema =  require("../models/wishlist.model");
router.post("/add-to-wishlist", async (req, res) => {
    try {
        const { item, userId, id } = req.body;

        // Check if the item already exists in the user's wishlist
        const existingWishListItem = await wishListItemSchema.findOne({ userId, id});

        if (existingWishListItem) {
            // If the item exists, you can update its properties as needed
            existingWishListItem.item = item; // Update item properties
            await existingWishListItem.save();
            res.json({ message: 'Item updated in wishlist' });
        } else {
            // If the item doesn't exist, create a new wishListItem and save it
            const savedItems = await wishListItemSchema.insertMany(item);
            res.json({ message: 'Item added to wishlist successfully' });
        }
    } catch (error) {
        console.error('Error adding item to wishlist:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.get('/get-wishlist', async (req, res) => {
    try {
        // Extract the userId from the query parameters
        const userId = req.query.userId;

        // Query your MongoDB database to retrieve the cart items for the user
        const wishListItem = await wishListItemSchema.find({ userId: userId });

        // Send the cart items as a JSON response
        res.json({ wishListItem });
    } catch (error) {
        console.error('Error fetching wishlist data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/delete-from-wishlist/:itemId', async (req, res) => {
    try {
        // Extract the item ID from the URL parameter
        const itemId = req.params.itemId;

        // Find and delete the item from the cart using its ID
        const deletedItem = await wishListItemSchema.findOneAndDelete({ _id: itemId });

        if (!deletedItem) {
            return res.status(404).json({ error: 'Item not found in the cart' });
        }

        res.json({ message: 'Item deleted from wishlist successfully' });
    } catch (error) {
        console.error('Error deleting item from wishlist:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
module.exports = router;