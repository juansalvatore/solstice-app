import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getContacts, getSelectedContact } from '../../actions/contactActions'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ContactItem from './ContactItem'
import ContentLoader from 'react-content-loader'
import { isEmpty } from 'lodash'

import Fade from 'react-reveal/Fade'

class ContactList extends Component {
  componentDidMount() {
    this.props.getContacts()
  }

  displayFavoriteContacts = () => {
    const favoriteContacts = this.props.contacts.favoriteContacts
    return favoriteContacts.map((contact, i) => (
      <NavLink to="/contact" key={i}>
        <ContactItem
          favorite={true}
          contact={contact}
          i={i}
          data={favoriteContacts}
          selectContact={() => this.props.getSelectedContact(contact._id)}
        />
      </NavLink>
    ))
  }

  displayOtherContacts = () => {
    const otherContacts = this.props.contacts.otherContacts

    return otherContacts.map((contact, i) => (
      <NavLink to="/contact" key={i}>
        <ContactItem
          contact={contact}
          i={i}
          data={otherContacts}
          selectContact={() => this.props.getSelectedContact(contact._id)}
        />
      </NavLink>
    ))
  }

  render() {
    const loader = (
      <ContentLoader
        height={90}
        speed={1}
        primaryColor={'rgba(0,0,0,0.05)'}
        secondaryColor={'rgba(0,0,0,0.08)'}
        style={{ paddingLeft: '20px', paddingTop: '20px', width: '370px' }}
      >
        {/* Pure SVG */}
        <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
        <rect x="90" y="17" rx="4" ry="4" width="250" height="13" />
        <rect x="90" y="45" rx="3" ry="3" width="200" height="10" />
      </ContentLoader>
    )

    return (
      <ContactListWrapper>
        {!isEmpty(this.props.contacts.favoriteContacts) ? (
          <div>
            <ContactsDivisor>Favorite contacts</ContactsDivisor>
            {this.props.contacts.isLoading ? (
              <div>
                {loader}
                <br />
                {loader}
                <br />
                {loader}
              </div>
            ) : (
              <Fade>
                <div>{this.displayFavoriteContacts()}</div>
              </Fade>
            )}
          </div>
        ) : null}

        <ContactsDivisor>Other contacts</ContactsDivisor>
        {this.props.contacts.isLoading ? (
          <div>
            {loader}
            <br />
            {loader}
            <br />
            {loader}
          </div>
        ) : (
          <Fade>
            <div>{this.displayOtherContacts()}</div>
          </Fade>
        )}
      </ContactListWrapper>
    )
  }
}

ContactList.propTypes = {
  getContacts: PropTypes.func.isRequired,
  getSelectedContact: PropTypes.func.isRequired,
  contacts: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  contacts: state.contacts,
})

export default connect(
  mapStateToProps,
  { getContacts, getSelectedContact }
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
