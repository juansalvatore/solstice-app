import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSelectedContact } from '../../actions/contactActions'
import styled, { keyframes } from 'styled-components'
import ContactListItem from '../common/ContactListItem'
import { isEmpty } from 'lodash'
import posed from 'react-pose'

class Contact extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      console.log(this.props.match.params.id)
      this.props.getSelectedContact(this.props.match.params.id)
    }
  }

  render() {
    // const selectedContact = JSON.parse(localStorage.getItem('selectedContact'))
    const { selectedContact } = this.props.contacts
    console.log(isEmpty(selectedContact))
    let contactContent
    if (isEmpty(selectedContact)) {
      contactContent = <div>test</div>
    } else {
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
      contactContent = (
        <ContactWrapper>
          <Image
            src={selectedContact.largeImageURL}
            onError={e => {
              e.target.onerror = null
              e.target.src =
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66z4PSz1ji0ZFAC5nheeYNnTPielTFlpmiWqwSAmCoUT3GJPc'
            }}
          />

          <ContactName>{selectedContact.name}</ContactName>
          <CompanyName>{selectedContact.companyName}</CompanyName>
          <ListWrapperStyled
            pose={this.props.contacts.isLoading ? 'closed' : 'open'}
          >
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
    return <div>{contactContent}</div>
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
})

export default connect(
  mapStateToProps,
  { getSelectedContact }
)(Contact)

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
  max-width: 800px;
`
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const appear = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`
const ContactName = styled.h1`
  font-weight: 400;
  font-size: 28px;
  margin-bottom: 5px;
  animation: ${appear} 0.5s linear;
  animation-fill-mode: forwards;
  animation-delay: 0.7s;
  opacity: 0;
`
const CompanyName = styled.h2`
  margin-bottom: 25px;
  color: rgba(0, 0, 0, 0.3);
  font-weight: 200;
  font-size: 16px;
  opacity: 0;
  animation: ${appear} 0.5s linear;
  animation-fill-mode: forwards;
  animation-delay: 1s;
`

const Image = styled.img`
  /* background: url(${props => props.img}); */
  width: 150px;
  height: 150px;
  /* background-position: center;
  background-size: cover; */
  margin: 20px;
  animation: ${appear} 0.7s linear;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
  opacity: 0;
`
// POSED animations

const Item = posed.div({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 },
})
