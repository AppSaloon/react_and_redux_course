import React from 'react'
import ReactDOM from 'react-dom'
import Shop from './components/Shop/Shop'
import './index.scss'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <Shop/>
  </Provider>,
  document.getElementById('root')
)