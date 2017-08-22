import { applyMiddleware, createStore, compose } from "redux"
import createSagaMiddleware from "redux-saga"

import sagas from "./sagas"
import reducers from "./reducers"

const sagaMiddleware = createSagaMiddleware()

export default function defaultStore() {
  const store = createStore(
    reducers,
    compose(
      applyMiddleware(sagaMiddleware)
    )
  )

  sagaMiddleware.run(sagas)

  return store
}
