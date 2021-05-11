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
  table_no: {
    type: Number,
    required: [false]
  },
  arrival_time: {
    type: Date,
    required: [true]
  },
  status: {				// "active/ inactive"
    type: String,
    required: [true]
  },
  order_type: {			// "takeaway / dinein"
    type: String,
    required: [true]
  },
  transaction_id: {
    type: String,
    required: [false]
  }
})

const customers = module.exports = mongoose.model('customers', custSchema);