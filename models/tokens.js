const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
  token_date: {
    type: String,
    required: [true]
  },
  count: {
    type: Number,
    required: [true]
  }
})

const tokens = module.exports = mongoose.model('tokens', tokenSchema);