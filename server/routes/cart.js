const express = require('express')
const router = express.Router();
const cartItemSchema = require("../models/cart.model");
router.post('/add-to-cart', async (req, res) => {
    try {
        const {
            id, title, kitImage, color, count, size, price, userId
        } = req.body;

        // Check if the item already exists in the user's cart
        const existingCartItem = await cartItemSchema.findOne({ userId, id });

        if (existingCartItem) {
            // If the item exists, you can update its count or handle it as needed
            existingCartItem.count += count;
            await existingCartItem.save();
            res.json({ message: 'Item quantity updated in the cart' });
        } else {
            // If the item doesn't exist, create a new cartItem and save it
            const cartItem = new cartItemSchema({
                id, title, kitImage, color, count, size, price, userId
            });
            await cartItem.save();
            res.json({ message: 'Item added to cart successfully' });
        }
    } catch (error) {
        console.error('Error adding item to cart:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/get-cart', async (req, res) => {
    try {
        // Extract the userId from the query parameters
        const userId = req.query.userId;

        // Query your MongoDB database to retrieve the cart items for the user
        const cartItems = await cartItemSchema.find({ userId: userId });

        // Send the cart items as a JSON response
        res.json({ cartItems });
    } catch (error) {
        console.error('Error fetching cart data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/delete-from-cart/:itemId', async (req, res) => {
    try {
        // Extract the item ID from the URL parameter
        const itemId = req.params.itemId;

        // Find and delete the item from the cart using its ID
        const deletedItem = await cartItemSchema.findOneAndDelete({ _id: itemId });

        if (!deletedItem) {
            return res.status(404).json({ error: 'Item not found in the cart' });
        }

        res.json({ message: 'Item deleted from cart successfully' });
    } catch (error) {
        console.error('Error deleting item from cart:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
module.exports = router;