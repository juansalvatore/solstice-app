import {
  GET_CONTACTS,
  CONTACTS_LOADING,
  GET_SELECTED_CONTACT,
  TOGGLE_FAVORITE,
  SET_CONTACTS,
} from './types'
import axios from 'axios'

// Get contacts list
export const getContacts = () => dispatch => {
  dispatch(setContactsLoading())
  axios
    .get('http://localhost:5000/api/contacts')
    .then(res =>
      dispatch({
        type: GET_CONTACTS,
        payload: res.data,
      })
    )
    .catch(err => console.log(err))
}

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

export const toggleFavorite = id => dispatch => {
  axios.post(`/api/contacts/favorite/${id}`).then(res => {
    localStorage.setItem(
      'selectedContact',
      JSON.stringify({ ...res.data, isFavorite: !res.data.isFavorite })
    )
    dispatch({
      type: TOGGLE_FAVORITE,
      payload: id,
    })
  })
}

export const setSelectedContact = contact => dispatch => {
  dispatch({
    type: SET_CONTACTS,
    payload: contact,
  })
}

// Set isLoading to true
const setContactsLoading = () => dispatch => {
  dispatch({
    type: CONTACTS_LOADING,
  })
}
