const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
var ObjectId = require('mongoose').Types.ObjectId

const Contact = require('../../models/Contact')

const validateContactInput = require('../../validation/contact')

router.get('/test', (req, res) => res.json({ test: 'Contacts work' }))

// @route   GET api/contacts
// @desc    Get all contacts
// @access  Private
router.get('/', (req, res) => {
  Contact.find({})
    .then(contacts => res.json(contacts))
    .catch(err => res.json(err))
})

// @route   POST api/contacts
// @desc    Create Post
// @access  Private
router.post('/', (req, res) => {
  const { errors, isValid } = validateContactInput(req.body)

  // Check Validation
  if (!isValid) {
    // Return any errors with 400 status
    return res.status(400).json(errors)
  }

  const contactFields = {
    name: req.body.name,
    companyName: req.body.company,
    isFavorite: req.body.isfavorite,
    smallImageURL: req.body.smallimageurl,
    largeImageURL: req.body.largeimageurl,
    emailAddress: req.body.email,
    birthdate: req.body.birthdate,
    phone: {
      work: req.body.work,
      home: req.body.home,
      mobile: req.body.mobile,
    },
    address: {
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      zipCode: req.body.zipcode,
    },
  }
  new Contact(contactFields)
    .save()
    .then(contact => res.json(contact))
    .catch(err => res.json(err))
})

// @route   POST api/contacts/favorite/:id
// @desc    Toggle favorite
// @access  Private
router.post('/favorite/:contact_id', (req, res) => {
  const errors = {}
  Contact.findOne({ _id: req.params.contact_id })
    .then(contact => {
      contact.update({ isFavorite: !contact.isFavorite }, () =>
        res.json(contact)
      )
    })
    .catch(err => {
      errors.findcontact = 'Contact not found'
      res.status(404).json(err)
    })
})

module.exports = router
