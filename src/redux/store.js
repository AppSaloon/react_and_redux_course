import { createStore, combineReducers } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'

import appState from './appState/reducer'
import reusedObjectReferenceState from './reusedObjectReferenceState/reducer'

export default createStore(
  combineReducers({
    appState,
    reusedObjectReferenceState,
  }),
  composeWithDevTools()
)