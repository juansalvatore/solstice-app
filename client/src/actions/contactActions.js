import {
  GET_CONTACTS,
  CONTACTS_LOADING,
  GET_SELECTED_CONTACT,
  TOGGLE_FAVORITE,
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
  console.log(id)
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
  axios.post(`/api/contacts/favorite/${id}`).then(res => {})
  dispatch({
    type: TOGGLE_FAVORITE,
    payload: id,
  })
}

// Set isLoading to true
const setContactsLoading = () => dispatch => {
  dispatch({
    type: CONTACTS_LOADING,
  })
}
