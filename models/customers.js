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
  token: {
    type: String,
    required: [true]
  },
  arrival_time: {
    type: Date,
    required: [true]
  },
  status: {				// "active:1 / inactive:1"
    type: Boolean,
    required: [true]
  },
  order_type: {			// "takeaway / dinein"
    type: String,
    required: [true]
  },
  order_id: {
    type: String,
    required: [false]
  },
  transaction_id: {
    type: String,
    required: [false]
  }
})

const customers = module.exports = mongoose.model('customers', custSchema);