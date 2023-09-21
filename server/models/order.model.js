const mongoose = require('mongoose')
const orderItemSchema = new mongoose.Schema({
    name:{type:String},
    price:{type:String},
    quantity:{type:Number},
    color:{type:String},
    size:{type:String},
    kitImage:{type:String},
    cost:{type:Number},
    userId:{type:String}
})
module.exports = mongoose.model("Orders",orderItemSchema)