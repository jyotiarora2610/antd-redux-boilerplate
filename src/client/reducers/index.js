// import { combineReducers } from 'redux'
import { createMigrate, persistCombineReducers } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native

const itemsState = {
  items: [
    {
      id: 1,
      name: 'item 1'
    }
  ]
}

const isengard = (store, action) => {
  return (
    store ||
      {
        tempus: new Date().getTime(),
        gateNumber: '1.0.0',
        darkGateNumber: '1.0.0'
      }
  )
}

const rootReducer = {
  isengard,
  itemsState: itemsState.items
}

export const persistConfig = {
  key: 'lifCare1.0.0',
  version: 0,
  storage,
  debug: true,
  stateReconciler: autoMergeLevel2
  // migrate: createMigrate(migrations, { debug: true })
}

const appReducer = persistCombineReducers(persistConfig, rootReducer)

const reducer = (state, action) => {
  if (action.type === 'RESET_STATE_NEW_ORDER') {
    state = undefined
  }

  if (action.type === 'UPDATE_TIMESTAMP') {
    state = {
      ...state,
      isengard: {
        ...state.isengard,
        tempus: new Date().getTime()
      }
    }
  }

  return appReducer(state, action)
}

export default reducer
