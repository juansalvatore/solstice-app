import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as LeftArrow } from '../../img/icons/left-arrow.svg'

export default class NavbarAdd extends Component {
  render() {
    return (
      <NavbarWrapper>
        <ContactNavWrapper>
          <LinkStyled to="/">
            <LeftArrowStyled />
            Contacts
          </LinkStyled>
          <Title>Add contact</Title>
        </ContactNavWrapper>
      </NavbarWrapper>
    )
  }
}

const NavbarWrapper = styled.div`
  display: flex;
  height: 60px;
  align-items: flex-end;
  justify-content: center;
  background-color: rgb(249, 249, 249);
  padding: 10px 0;
  font-weight: 500;
  border-bottom: 1px solid rgb(241, 241, 241);
`
const ContactNavWrapper = styled.div`
  max-width: 900px;
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
  z-index: 1;
  :hover {
    opacity: 0.8;
  }
`
const Title = styled.h1`
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 18px;
`
