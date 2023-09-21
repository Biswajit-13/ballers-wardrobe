// sk_test_51LnUKJDM1jwCEz8OJG69szv032rIo4X0WrFMaXrqxu9g8fdohsL1y54JEUhFUKrqoBquVjN3AzpIFyrbN915bgcd00O5hqoGCJ

const express = require('express');
var cors = require('cors');
require('dotenv').config()
const db = require("./db");
const billingRouter = require("./routes/billing");
const cartRouter = require("./routes/cart");
const checkoutRouter = require("./routes/checkout");
const orderRouter = require("./routes/order");
const wishListRouter = require("./routes/wishlist");
const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use("/billing", billingRouter);
app.use("/cart",cartRouter)
app.use(checkoutRouter);
app.use("/order",orderRouter);
app.use("/wishlist",wishListRouter);

app.listen(4000, () => console.log("Listening on port 4000!"));