const express = require('express')
const router = express.Router(); 
const stripe = require('stripe')(process.env.STRIPE_KEY);
const orderItemSchema = require('../models/order.model');
router.post("/checkout", async (req, res) => {
    try {
        const items = req.body.items;
        let lineItems = [];

        items.forEach((item) => {
            lineItems.push({
                price: item.price,
                quantity: item.quantity,
            });
        });

        console.log("Line Items:", lineItems); // Log lineItems for debugging

        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: "http://localhost:5173/success",
            cancel_url: "http://localhost:5173/cancel"
        });
        const savedItems = await orderItemSchema.insertMany(items);
        res.send(JSON.stringify({
            url: session.url
        }));
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "An error occurred." });
    }
});

module.exports = router;