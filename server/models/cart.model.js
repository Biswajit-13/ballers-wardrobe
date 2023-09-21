const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String },
  kitImage: { type: String },
  color: { type: String },
  count: { type: Number, required: true, default: 1 },
  size:{type:String},
  price:{type:Number},
  userId:{type:String}
});

module.exports = mongoose.model('CartItem', cartItemSchema);
