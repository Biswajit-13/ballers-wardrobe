const express = require('express')
const router =express.Router();
const orderItemSchema = require("../models/order.model");
router.get('/get-order', async (req, res) => {
    try {
        // Extract the userId from the query parameters
        const userId = req.query.userId;

        // Query your MongoDB database to retrieve the cart items for the user
        const orderItems = await orderItemSchema.find({ userId: userId });

        // Send the cart items as a JSON response
        res.json({ orderItems });
    } catch (error) {
        console.error('Error fetching cart data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
module.exports = router;