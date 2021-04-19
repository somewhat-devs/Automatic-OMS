const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
  customer_id: {
    type: String,
    required: [true]
  },
  order_id: {
    type: String,
    required: [true]
  },
  payment_mode: {		// "pending / received"
    type: String,
    required: [true]
  },
  payment_status: {
    type: String,
    required: [false]
  }
})

const transactions = module.exports = mongoose.model('transactions', transactionSchema);