import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSelectedContact } from '../../actions/contactActions'
import styled from 'styled-components'

class Contact extends Component {
  render() {
    const { selectedContact } = this.props
    return (
      <ContactWrapper>
        <Image img={selectedContact.largeImageURL} />
        <h1>{selectedContact.name}</h1>
        <h2>{selectedContact.companyName}</h2>
        <ul>
          <li>{selectedContact.phone.home}</li>
          <li>{selectedContact.phone.mobile}</li>
          <li>{selectedContact.phone.work}</li>

          <li>
            {selectedContact.address.street}
            <br />
            {selectedContact.address.city}
            {', '}
            {selectedContact.address.state}
            {', '}
            {selectedContact.address.zipCode}
            {', '}
            {selectedContact.address.country}
          </li>
          <li>{selectedContact.birthdate}</li>
          <li>{selectedContact.emailAddress}</li>
        </ul>
      </ContactWrapper>
    )
  }
}

const mapStateToProps = state => ({
  selectedContact: state.contacts.selectedContact,
})

export default connect(
  mapStateToProps,
  { getSelectedContact }
)(Contact)

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.div`
  background: url(${props => props.img});
  width: 150px;
  height: 150px;
  background-position: center;
  background-size: cover;
  margin: 20px;
`
