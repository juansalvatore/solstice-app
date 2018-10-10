import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  toggleFavorite,
  setSelectedContact,
} from '../../actions/contactActions'
import { ReactComponent as Star } from '../../img/icons/star.svg'
import { ReactComponent as LeftArrow } from '../../img/icons/left-arrow.svg'

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
          <LinkStyled to="/">
            <LeftArrowStyled />
            Contacts
          </LinkStyled>
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
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-between;
  align-items: flex-end;
`
const LeftArrowStyled = styled(LeftArrow)`
  width: 20px;
  height: 20px;
  margin: 0 5px -4px 0;
`
const LinkStyled = styled(Link)`
  color: rgba(52, 130, 199, 1);
  transition: all ease-in-out 200ms;
  :hover {
    opacity: 0.8;
  }
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
