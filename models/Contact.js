const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    default: '',
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
  smallImageURL: {
    type: String,
    required: true,
  },
  largeImageURL: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  birthdate: {
    type: String,
    required: true,
  },
  phone: {
    work: {
      type: String,
      required: false,
    },
    home: {
      type: String,
      required: false,
    },
    mobile: {
      type: String,
      required: false,
    },
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Contact = mongoose.model('contact', ContactSchema)
