import {
  GET_CONTACTS,
  CONTACTS_LOADING,
  GET_SELECTED_CONTACT,
} from '../actions/types'
import { filter, orderBy, isEmpty } from 'lodash'

const initialState = {
  favoriteContacts: [],
  otherContacts: [],
  isLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      const favoriteContacts = orderBy(
        filter(action.payload, contact => contact.isFavorite),
        'name',
        'dec'
      )
      const otherContacts = orderBy(
        filter(action.payload, contact => !contact.isFavorite),
        'name',
        'dec'
      )

      return {
        favoriteContacts: [...favoriteContacts],
        otherContacts: [...otherContacts],
        isFavoriteContactsEmpty: isEmpty(favoriteContacts),
        isOtherContactsEmpty: isEmpty(otherContacts),
        isLoading: false,
      }

    case GET_SELECTED_CONTACT:
      return {
        ...state,
        selectedContact: filter(
          [...state.favoriteContacts, ...state.otherContacts],
          contact => contact.id === action.payload
        ),
      }

    case CONTACTS_LOADING:
      return { ...state, isLoading: true }

    default:
      return state
  }
}
