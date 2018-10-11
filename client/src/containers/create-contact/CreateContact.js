import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createContact } from '../../actions/contactActions'
import PropTypes from 'prop-types'
import TextFieldGroup from '../../components/common/TextFieldGroup'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    smallimageurl: '',
    largeimageurl: '',
    birthdate: '',
    street: '',
    city: '',
    state: '',
    country: '',
    zipcode: '',
    company: '',
    work: '',
    home: '',
    mobile: '',
    errors: {},
  }

  componentWillMount() {
    window.scrollTo(0, 0)
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    const contactData = {
      name: this.state.name,
      email: this.state.email,
      smallimageurl: this.state.smallimageurl,
      largeimageurl: this.state.largeimageurl,
      birthdate: this.state.birthdate,
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      zipcode: this.state.zipcode,
      company: this.state.company,
      work: this.state.work,
      home: this.state.home,
      mobile: this.state.mobile,
    }
    this.props.createContact(contactData, this.props.history)
  }

  render() {
    const { errors } = this.state
    return (
      <CreateContactWrapper>
        <FormWrapper onSubmit={this.onSubmit}>
          <TextFieldGroup
            name="name"
            label="* Name"
            value={this.state.name}
            onChange={this.onChange}
            error={errors.name}
          />
          <TextFieldGroup
            name="company"
            label="Company"
            value={this.state.company}
            onChange={this.onChange}
            error={errors.company}
          />
          <TextFieldGroup
            name="email"
            label="* Email"
            value={this.state.email}
            onChange={this.onChange}
            error={errors.email}
          />
          <TextFieldGroup
            name="smallimageurl"
            label="* Small Image URL"
            value={this.state.smallimageurl}
            onChange={this.onChange}
            error={errors.smallimageurl}
          />
          <TextFieldGroup
            name="largeimageurl"
            label="* Large Image URL"
            value={this.state.largeimageurl}
            onChange={this.onChange}
            error={errors.largeimageurl}
          />
          <TextFieldGroup
            name="birthdate"
            label="* Birthdate"
            value={this.state.birthdate}
            onChange={this.onChange}
            error={errors.birthdate}
          />
          <TextFieldGroup
            name="street"
            label="* Street"
            value={this.state.street}
            onChange={this.onChange}
            error={errors.street}
          />
          <TextFieldGroup
            name="city"
            label="* City"
            value={this.state.city}
            onChange={this.onChange}
            error={errors.city}
          />
          <TextFieldGroup
            name="state"
            label="* State"
            value={this.state.state}
            onChange={this.onChange}
            error={errors.state}
          />
          <TextFieldGroup
            name="country"
            label="* Country"
            value={this.state.country}
            onChange={this.onChange}
            error={errors.country}
          />
          <TextFieldGroup
            name="zipcode"
            label="* ZipCode"
            value={this.state.zipcode}
            onChange={this.onChange}
            error={errors.zipcode}
          />

          <TextFieldGroup
            name="work"
            label="Work"
            value={this.state.work}
            onChange={this.onChange}
            error={errors.work}
          />
          <TextFieldGroup
            name="home"
            label="Home"
            value={this.state.home}
            onChange={this.onChange}
            error={errors.home}
          />
          <TextFieldGroup
            name="mobile"
            label="Mobile"
            value={this.state.mobile}
            onChange={this.onChange}
            error={errors.mobile}
          />
          <SubmitButton variant="contained" type="submit">
            Submit
          </SubmitButton>
        </FormWrapper>
      </CreateContactWrapper>
    )
  }
}

AddContact.propTypes = {
  createContact: PropTypes.func.isRequired,
  errores: PropTypes.object,
}

const mapStateToProps = state => ({
  errors: state.errors,
})

export default connect(
  mapStateToProps,
  { createContact }
)(AddContact)

const CreateContactWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
const FormWrapper = styled.form`
  width: 100%;
  padding: 0 15px;
  margin-top: 40px;
  margin-bottom: 60px;
  max-width: 500px;
`
const SubmitButton = styled(Button)`
  width: 100%;
`
