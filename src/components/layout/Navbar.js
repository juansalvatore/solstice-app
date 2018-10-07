import React, { Component } from 'react'
import styled from 'styled-components'

export default class Navbar extends Component {
  render() {
    return (
      <NavbarWrapper>
        <Title>Contacts</Title>
      </NavbarWrapper>
    )
  }
}

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
