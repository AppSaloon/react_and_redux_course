import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from '@material-ui/styles'

const theme = {
  colors: {
    primary: 'blue',
    secondary: 'purple',
    error: 'red',
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App/>
  </ThemeProvider>,
  document.getElementById('root')
)