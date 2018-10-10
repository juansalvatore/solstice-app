import React from 'react'
import styled from 'styled-components'
import Line from '../common/Line'

export default ({ contact, i, data, favorite, selectContact }) => {
  return (
    <div onClick={() => selectContact(contact._id)}>
      <ContactItemWrapper>
        <ContactImage img={contact.smallImageURL} />
        <ContactTextContainer>
          <div style={!favorite ? { marginLeft: 22 } : null}>
            <span
              role="img"
              aria-label="star"
              style={!favorite ? { display: 'none' } : null}
            >
              ⭐{' '}
            </span>
            {contact.name}
          </div>
          <ContactCompany>{contact.companyName}</ContactCompany>
        </ContactTextContainer>
      </ContactItemWrapper>
      {data.length === i + 1 ? null : <Line />}
    </div>
  )
}

// ContactItem style
const ContactItemWrapper = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  transition: all ease-in-out 200ms;

  :active {
    background-color: rgba(0, 0, 0, 0.05);
  }
`

const ContactImage = styled.span`
  background: url(${props => props.img});
  background-position: center;
  background-size: cover;
  width: 60px;
  height: 60px;
`

const ContactTextContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ContactCompany = styled.span`
  height: 17px;
  font-size: 14px;
  margin-left: 22px;
  color: rgba(0, 0, 0, 0.3);
`
