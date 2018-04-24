import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { persistStore } from 'redux-persist'
import rootEpic from '../client/epics'
import reducer from '../client/reducers'
// import errorReporter from './../client/utils/errorReporter'

const epicMiddleware = createEpicMiddleware(rootEpic)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
  let store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  )
  let persistor = persistStore(store)

  return { persistor, store }
}

export const { persistor, store } = configureStore()
