import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getContacts, selectContact } from '../../actions/contactActions'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ContactItem from './ContactItem'

class ContactList extends Component {
  componentDidMount() {
    this.props.getContacts()
  }

  displayFavoriteContacts = () => {
    const favoriteContacts = this.props.contacts.favoriteContacts

    return favoriteContacts.map((contact, i) => (
      <ContactItem
        key={i}
        favorite={true}
        contact={contact}
        i={i}
        data={favoriteContacts}
        onClick={() => this.props.selectContact(contact.id)}
      />
    ))
  }

  displayOtherContacts = () => {
    const otherContacts = this.props.contacts.otherContacts

    return otherContacts.map((contact, i) => (
      <ContactItem
        key={i}
        contact={contact}
        i={i}
        data={otherContacts}
        onClick={() => this.props.selectContact(contact.id)}
      />
    ))
  }

  render() {
    return (
      <ContactListWrapper>
        <ContactsDivisor>Favorite contacts</ContactsDivisor>
        {this.displayFavoriteContacts()}
        <ContactsDivisor>Other contacts</ContactsDivisor>
        {this.displayOtherContacts()}
      </ContactListWrapper>
    )
  }
}

ContactList.propTypes = {
  getContacts: PropTypes.func.isRequired,
  selectContact: PropTypes.func.isRequired,
  contacts: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  contacts: state.contacts,
})

export default connect(
  mapStateToProps,
  { getContacts, selectContact }
)(ContactList)

const ContactListWrapper = styled.div`
  max-width: 1000px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`

const ContactsDivisor = styled.div`
  display: flex;
  background-color: rgb(244, 244, 244);
  padding: 5px 15px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 500;
  color: rgb(111, 113, 116);
`
