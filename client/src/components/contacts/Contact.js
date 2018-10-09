import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSelectedContact } from '../../actions/contactActions'
import styled from 'styled-components'
import { isEmpty } from 'lodash'
import ContactListItem from '../common/ContactListItem'
import Fade from 'react-reveal/Fade'

import posed from 'react-pose'

class Contact extends Component {
  state = {
    load: true,
  }
  componentDidMount() {
    this.setState({ load: false })
  }

  render() {
    const selectedContact = JSON.parse(localStorage.getItem('selectedContact'))
    const adressString = `${selectedContact.address.city}, ${
      selectedContact.address.state
    }, ${selectedContact.address.zipCode}, ${selectedContact.address.country}`
    const adress = (
      <div>
        {selectedContact.address.street}
        <br />
        {adressString}
      </div>
    )

    return (
      <ContactWrapper>
        <Fade>
          <Image img={selectedContact.largeImageURL} />
        </Fade>
        <ContactName>{selectedContact.name}</ContactName>
        <CompanyName>{selectedContact.companyName}</CompanyName>
        <ListWrapperStyled pose={this.state.load ? 'closed' : 'open'}>
          <Item>
            <ContactListItem
              title="phone:"
              data={selectedContact.phone.home}
              phoneType="Home"
            />
          </Item>
          <Item>
            <ContactListItem
              title="phone:"
              data={selectedContact.phone.mobile}
              phoneType="Mobile"
            />
          </Item>
          <Item>
            <ContactListItem
              title="phone:"
              data={selectedContact.phone.work}
              phoneType="Work"
            />
          </Item>
          <Item>
            <ContactListItem title="adress:" data={adress} />
          </Item>
          <Item>
            <ContactListItem
              title="birthdate:"
              data={selectedContact.birthdate}
            />
          </Item>
          <Item>
            <ContactListItem
              title="email:"
              data={selectedContact.emailAddress}
            />
          </Item>
        </ListWrapperStyled>
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
const ListWrapper = posed.div({
  open: {
    delayChildren: 200,
    staggerChildren: 50,
    height: '270px',
  },
  closed: {
    height: '0px',
    delay: 300,
  },
})
const ListWrapperStyled = styled(ListWrapper)`
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
// POSED animations

const Item = posed.div({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 },
})
