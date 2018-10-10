import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  toggleFavorite,
  setSelectedContact,
} from '../../actions/contactActions'
import { ReactComponent as Star } from '../../img/icons/star.svg'

class Navbar extends Component {
  handleClick = () => {
    const selectedContact = JSON.parse(localStorage.getItem('contacts'))
      .selectedContact

    this.props.toggleFavorite(this.props.contacts.selectedContact._id)
  }
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('selectedContact'))

    this.props.setSelectedContact(contacts)
  }

  render() {
    const selectedContact = JSON.parse(localStorage.getItem('selectedContact'))
    return (
      <NavbarWrapper>
        <ContactNavWrapper>
          <Link to="/">{'< Contacts'}</Link>
          <ToggleFavorite onClick={() => this.handleClick()}>
            {this.props.contacts.selectedContact ? (
              <StarStyled
                favorite={this.props.contacts.selectedContact.isFavorite}
              />
            ) : null}
          </ToggleFavorite>
        </ContactNavWrapper>
      </NavbarWrapper>
    )
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
})

export default connect(
  mapStateToProps,
  { toggleFavorite, setSelectedContact }
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

const ContactNavWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
`

const ToggleFavorite = styled.span``
const StarStyled = styled(Star)`
  cursor: pointer;
  width: 20px;
  height: 20px;
  stroke: #ccc;
  fill: ${props => (props.favorite === true ? 'red' : '#ccc')};
`
