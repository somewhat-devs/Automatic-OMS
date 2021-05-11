const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true]
  },
  description: {
    type: String,
    required: [true]
  },
  unit_price: {
    type: Number,
    required: [true]
  },
  category: {
    type: String,
    required: [true]
  },
  available: {
    type: Boolean,
    required: [true]
  }
})

const items = module.exports = mongoose.model('items', itemSchema);