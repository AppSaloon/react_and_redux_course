import { createStore, combineReducers } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'

import appState from './appState/reducer'
import cartState from './cartState/reducer'

export default createStore(
  combineReducers({
    appState,
    cartState,
  }),
  composeWithDevTools()
)