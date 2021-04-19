const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  order_token: {
    type: String,
    required: [true]
  },
  customer_id: {
    type: String,
    required: [true]
  },
  created_at: {
    type: Date,
    required: [true]
  },
  order_status: {		// "received / preparing / served"
    type: String,
    required: [true]
  },
  discount: {
    type: Number,
    required: [false]
  },
  tax: {
    type: Number,
    required: [false]
  },
  subtotal: {
    type: Number,
    required: [false]
  },
  grandtotal: {
    type: Number,
    required: [false]
  },
  order_item: {			// [ { item_id: , quantity: , status: ["wait", "prep", "otw", "serv"] }, ... ]
    type: Array,
    required: [false]
  },
  feedback: {
    type: Number,
    required: [false]
  }
})

const orders = module.exports = mongoose.model('orders', orderSchema);