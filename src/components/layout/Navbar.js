import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import { Link } from 'react-router-dom'
import { toggleFavorite } from '../../actions/contactActions'

class Navbar extends Component {
  render() {
    const isContact = !isEmpty(this.props.contacts.selectedContact)

    const listNav = <Title>Contacts</Title>
    const contactNav = (
      <ContactNavWrapper>
        <Link to="/">{'< Contacts'}</Link>
        <span onClick={() => this.props.toggleFavorite('100')}>star</span>
      </ContactNavWrapper>
    )
    return <NavbarWrapper>{!isContact ? listNav : contactNav}</NavbarWrapper>
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
})

export default connect(
  mapStateToProps,
  { toggleFavorite }
)(Navbar)

const NavbarWrapper = styled.div`
  display: flex;
  height: 60px;
  align-items: flex-end;
  background-color: rgb(249, 249, 249);
  padding: 10px 0;
  font-weight: 500;
  border-bottom: 1px solid rgb(241, 241, 241);
`
const Title = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 18px;
`
const ContactNavWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
`
