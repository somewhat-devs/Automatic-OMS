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
  order_status: {		// "active / inactive"
    type: String,
    required: [true]
  },
  table_no: {
    type: Number,
    required: [false]
  },
  preptime: {
    type: String,
    required: [false]
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
  order_item: {			// [ { item_id: , quantity: , status: ["wait", "prep", "otw", "serv", "canl"] }, ... ]
    type: Array,
    required: [false]
  },
  feedback: {
    type: Number,
    required: [false]
  },
  comment: {
    type: String,
    required: [false]
  }
})

const orders = module.exports = mongoose.model('orders', orderSchema);