import React from 'react'
import ReactDOM from 'react-dom'
import ClickCounter from './components/ClickCounter'

ReactDOM.render(
  <ClickCounter defaultValue={5}/>,
  document.getElementById('root')
)