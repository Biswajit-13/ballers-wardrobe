const express = require('express');
const router = express.Router();
const billingSchema = require('../models/billing.model');
router.post("/add", async (req, res) => {
    try {
        const { userId, billingName, billingCountry, billingAddress, billingCity, billingState, billingPostalCode } = req.body;
        const billingDetails = new billingSchema({
            userId, billingName, billingCountry, billingAddress, billingCity, billingState, billingPostalCode
        });
      await billingDetails.save();
      res.json({message:'billing details add successfully'})
    }
    catch {
        console.error('Error adding billing details', error);
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.get('/get', async (req, res) => {
    try {
        // Extract the userId from the query parameters
        const userId = req.query.userId;

        // Query your MongoDB database to retrieve the cart items for the user
        const billingDetails = await billingSchema.find({ userId: userId });

        // Send the cart items as a JSON response
        res.json({ billingDetails });
    } catch (error) {
        console.error('Error fetching cart data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;