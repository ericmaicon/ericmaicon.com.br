import { take, put } from "redux-saga/effects"

const CONTACT = "contact"
const CONTACT_DONE = `${CONTACT}/done`

export function contactReducer(state = { contactDone: false }, action) {
  switch (action.type) {
  case CONTACT_DONE:
    return {
      contactDone: true
    }

  default:
    return state
  }
}

export function contact(data) {
  return {
    type: CONTACT,
    data: data
  }
}

export function* contactSaga() {
  while(true) {
    const action = yield take(CONTACT)
    emailjs.init("user_uLqrUNiRlgufQdV5wJyK5")
    emailjs.send("sendgrid", "contact",{
      name: action.data.name,
      email: action.data.email,
      subject: action.data.subject,
      message: action.data.message
    })
    yield put({
      type: CONTACT_DONE
    })
  }
}
