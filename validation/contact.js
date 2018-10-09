const Validator = require('validator')
const _ = require('lodash')

module.exports = function validateContactInput(data) {
  let errors = {}

  data.name = _.isEmpty(data.name) ? '' : data.name
  data.email = _.isEmpty(data.email) ? '' : data.email
  data.smallimageurl = _.isEmpty(data.smallimageurl) ? '' : data.smallimageurl
  data.largeimageurl = _.isEmpty(data.largeimageurl) ? '' : data.largeimageurl
  data.birthdate = _.isEmpty(data.birthdate) ? '' : data.birthdate
  // Address data
  data.street = _.isEmpty(data.street) ? '' : data.street
  data.city = _.isEmpty(data.city) ? '' : data.city
  data.state = _.isEmpty(data.state) ? '' : data.state
  data.country = _.isEmpty(data.country) ? '' : data.country
  data.zipcode = _.isEmpty(data.zipcode) ? '' : data.zipcode

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required'
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid'
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required'
  }

  if (Validator.isEmpty(data.smallimageurl)) {
    errors.smallimageurl = 'Smallimageurl field is required'
  }

  if (Validator.isEmpty(data.largeimageurl)) {
    errors.largeimageurl = 'Largeimageurl field is required'
  }

  if (Validator.isEmpty(data.birthdate)) {
    errors.birthdate = 'Birthdate field is required'
  }

  if (Validator.isEmpty(data.street)) {
    errors.street = 'Street field is required'
  }

  if (Validator.isEmpty(data.city)) {
    errors.city = 'City field is required'
  }

  if (Validator.isEmpty(data.state)) {
    errors.state = 'State field is required'
  }

  if (Validator.isEmpty(data.country)) {
    errors.country = 'Country field is required'
  }

  if (Validator.isEmpty(data.zipcode)) {
    errors.zipcode = 'Zipcode field is required'
  }

  return {
    errors,
    isValid: _.isEmpty(errors),
  }
}
