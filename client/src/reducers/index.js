import { combineReducers } from 'redux'
import contactsReducer from './contactsReducer'
import errorReducer from './errorReducer'

export default combineReducers({
  contacts: contactsReducer,
  errors: errorReducer,
})
