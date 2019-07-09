import { createStore, combineReducers } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'

import appState from './appState/reducer'

export default createStore(
  combineReducers({
    appState,
  }),
  composeWithDevTools()
)