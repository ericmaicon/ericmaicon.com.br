import { combineReducers } from "redux"
import { reducer as form } from "redux-form"

import { contactReducer as contact } from "features/contact/contact"

export default combineReducers({
  form,
  contact
})
