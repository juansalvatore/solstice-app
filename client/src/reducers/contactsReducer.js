import {
  GET_CONTACTS,
  CONTACTS_LOADING,
  GET_SELECTED_CONTACT,
  TOGGLE_FAVORITE,
} from '../actions/types'
import { filter, orderBy, isEmpty, find } from 'lodash'

const initialState = {
  favoriteContacts: [],
  otherContacts: [],
  selectedContact: {},
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
        isLoading: false,
        selectedContact: filter(
          [...state.favoriteContacts, ...state.otherContacts],
          contact => contact.id === action.payload
        )[0],
      }

    case CONTACTS_LOADING:
      return { ...state, isLoading: true }

    case TOGGLE_FAVORITE:
      return state

    default:
      return state
  }
}
