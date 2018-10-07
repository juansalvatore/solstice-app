import { GET_CONTACTS, CONTACTS_LOADING, GET_SELECTED_CONTACT } from './types'
import axios from 'axios'

// Get contacts list
export const getContacts = () => dispatch => {
  dispatch(setContactsLoading())
  axios
    .get('/technical-challenge/v3/contacts.json')
    .then(res =>
      dispatch({
        type: GET_CONTACTS,
        payload: res.data,
      })
    )
    .catch(err => console.log(err))
}

export const selectContact = id => dispatch => {
  dispatch(setContactsLoading())
  dispatch({
    type: GET_SELECTED_CONTACT,
    payload: id,
  })
}
// Set isLoading to true
const setContactsLoading = () => dispatch => {
  dispatch({
    type: CONTACTS_LOADING,
  })
}
