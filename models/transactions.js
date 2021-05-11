const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
  customer_id: {
    type: String,
    required: [true]
  },
  order_token: {
    type: String,
    required: [true]
  },
  payment_mode: {		// "pending / received"
    type: String,
    required: [true]
  },
  amount: {
    type: Number,
    required: [false]
  }
})

const transactions = module.exports = mongoose.model('transactions', transactionSchema);