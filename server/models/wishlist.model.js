const mongoose = require('mongoose');

const wishListItemSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String },
  price: { type: Number },
  rating: { type: Number },
  description: { type: String },
  color: {
    home: { type: String },
    away: { type: String },
    alternate: { type: String },
  },
  kitImage: {
    home: { type: String },
    away: { type: String },
    alternate: { type: String },
  },
  size: {
    small: { type: String },
    medium: { type: String },
    large: { type: String },
    extraLarge: { type: String },
    extraExtraLarge: { type: String },
  },
  userId: { type: String }
});

module.exports = mongoose.model('WishListItem', wishListItemSchema);
