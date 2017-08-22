import { fork } from "redux-saga/effects"

import { contactSaga } from "features/contact/contact"

const sagas = [
  contactSaga
]

export default function* rootSaga() {
  yield sagas.map(saga => fork(saga))
}
