import React from 'react'
import styled from 'styled-components'
import Line from './Line'

const ContactListItem = ({ title, data, phoneType }) => (
  <div style={!data ? { display: 'none' } : null}>
    <Line />
    <ListItemWrapper>
      <ItemTitle>{title}</ItemTitle>
      <ListItemDataWrapper>
        <ListItemData>{data}</ListItemData>
        <PhoneType>{phoneType}</PhoneType>
      </ListItemDataWrapper>
    </ListItemWrapper>
  </div>
)

export default ContactListItem

const ListItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 19px 20px;
  width: 100%;
`
const ItemTitle = styled.span`
  color: rgb(0, 0, 0, 0.3);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 13px;
  margin-bottom: 15px;
`
const ListItemDataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const ListItemData = styled.span``
const PhoneType = styled.span`
  color: rgb(0, 0, 0, 0.5);
  font-weight: 600;
  font-size: 13px;
  display: flex;
  align-items: flex-end;
`
