import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSelectedContact } from '../../actions/contactActions'
import styled from 'styled-components'
import { isEmpty } from 'lodash'
import ContactListItem from '../common/ContactListItem'

class Contact extends Component {
  componentWillMount() {
    if (!isEmpty(this.props.selectedContact)) {
      localStorage.setItem(
        'selectedContact',
        JSON.stringify(this.props.selectedContact)
      )
    }
  }
  render() {
    const selectedContact = JSON.parse(localStorage.getItem('selectedContact'))

    const adress = (
      <div>
        {selectedContact.address.street}
        <br />
        {selectedContact.address.city}
        {', '}
        {selectedContact.address.state}
        {', '}
        {selectedContact.address.zipCode}
        {', '}
        {selectedContact.address.country}
      </div>
    )

    return (
      <ContactWrapper>
        <Image img={selectedContact.largeImageURL} />
        <ContactName>{selectedContact.name}</ContactName>
        <CompanyName>{selectedContact.companyName}</CompanyName>
        <ListWrapper>
          <ContactListItem
            title="phone:"
            data={selectedContact.phone.home}
            phoneType="Home"
          />
          <ContactListItem
            title="phone:"
            data={selectedContact.phone.mobile}
            phoneType="Mobile"
          />
          <ContactListItem
            title="phone:"
            data={selectedContact.phone.work}
            phoneType="Work"
          />
          <ContactListItem title="adress:" data={adress} />
          <ContactListItem
            title="birthdate:"
            data={selectedContact.birthdate}
          />
          <ContactListItem title="email:" data={selectedContact.emailAddress} />
        </ListWrapper>
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

const ContactName = styled.h1`
  font-weight: 400;
  font-size: 28px;
  margin-bottom: 5px;
`
const CompanyName = styled.h2`
  margin-bottom: 25px;
  color: rgba(0, 0, 0, 0.3);
  font-weight: 200;
  font-size: 16px;
`
const ListWrapper = styled.ul`
  width: 100%;
`
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
