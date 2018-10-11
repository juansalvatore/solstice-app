import {
  GET_CONTACTS,
  CONTACTS_LOADING,
  GET_SELECTED_CONTACT,
  TOGGLE_FAVORITE,
  SET_CONTACTS,
  GET_ERRORS,
} from './types'
import axios from 'axios'

// Retrieves contact list
export const getContacts = () => dispatch => {
  dispatch(setContactsLoading())
  axios
    .get('/api/contacts')
    .then(res =>
      dispatch({
        type: GET_CONTACTS,
        payload: res.data,
      })
    )
    .catch(err => console.log(err))
}

// Retrieves selected contact
export const getSelectedContact = id => dispatch => {
  dispatch(setContactsLoading())
  axios
    .get(`/api/contacts/${id}`)
    .then(res => {
      localStorage.setItem('selectedContact', JSON.stringify(res.data))
      dispatch({
        type: GET_SELECTED_CONTACT,
        payload: res.data,
      })
    })
    .catch()
}

// Toggles isFavorite value in contact document
export const toggleFavorite = id => dispatch => {
  axios.post(`/api/contacts/favorite/${id}`).then(res => {
    localStorage.setItem('selectedContact', JSON.stringify({ ...res.data, isFavorite: !res.data.isFavorite }))
    dispatch({
      type: TOGGLE_FAVORITE,
      payload: id,
    })
  })
}

// Stores selected contact in redux store
export const setSelectedContact = contact => dispatch => {
  dispatch({
    type: SET_CONTACTS,
    payload: contact,
  })
}

// Creates a new contact and redirects to /
// If errors it stores them in errors object in redux store
export const createContact = (contactData, history) => dispatch => {
  axios
    .post('/api/contacts', contactData)
    .then(res => history.push('/'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    )
}

// Sets isLoading to true
const setContactsLoading = () => dispatch => {
  dispatch({
    type: CONTACTS_LOADING,
  })
}
