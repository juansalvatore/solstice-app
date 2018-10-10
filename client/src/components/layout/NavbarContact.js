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
    this.props.toggleFavorite(this.props.contacts.selectedContact._id)
  }

  componentDidMount() {
    const selectedContact = JSON.parse(localStorage.getItem('selectedContact'))
    this.props.setSelectedContact({
      ...selectedContact,
      isFavorite: !selectedContact.isFavorite,
    })
  }

  render() {
    return (
      <NavbarWrapper>
        <ContactNavWrapper>
          <Link to="/">{'< Contacts'}</Link>
          <ToggleFavorite onClick={() => this.handleClick()}>
            {this.props.contacts.selectedContact ? (
              <StarStyled
                style={{
                  isFavorite: this.props.contacts.selectedContact.isFavorite,
                }}
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
  align-items: flex-end;
`

const ToggleFavorite = styled.span`
  margin-bottom: -10px;
`
const StarStyled = styled(Star)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  stroke: #ccc;
  padding: 5px;
  border-radius: 50px;
  fill: ${props =>
    props.style.isFavorite === true ? 'rgb(244,	178, 22)' : '#ccc'};
  transition: all ease-in-out 200ms;
  :hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
  :active {
    transform: scale(0.8);
  }
`
