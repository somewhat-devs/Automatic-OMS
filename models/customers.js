const mongoose = require('mongoose')

const custSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true]
  },
  mobileno: {
    type: String,
    required: [true]
  },
  table_no: {
    type: Number,
    required: [true]
  },
  arrival_time: {
    type: Date,
    required: [true]
  },
  status: {
    type: Boolean,
    required: [true]
  },
  order_type: {
    type: String,
    required: [true]
  },
  order_id: {
    type: String,
    required: [true]
  },
  transaction_id: {
    type: String,
    required: [true]
  }
})

const customers = module.exports = mongoose.model('customers', custSchema);