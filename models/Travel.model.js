const { Schema, model } = require('mongoose')

const Mebel = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 3
  },
  image: {
    type: String,
    required: true
  },
  descount: {
    type: String,
    required: true
  }
})

module.exports = model('Mebel', Mebel)