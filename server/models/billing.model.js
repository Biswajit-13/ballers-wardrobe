const mongoose = require('mongoose');
const billingSchema = new mongoose.Schema({
userId:{type:String},
billingName:{type:String},
billingCountry:{type:String},
billingAddress:{type:String},
billingCity:{type:String},
billingState:{type:String},
billingPostalCode:{type:String},
})

module.exports = mongoose.model('Billing',billingSchema)