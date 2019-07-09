import React, { Component } from 'react'
import classes from './Header.module.scss'
import CurrencyPicker from '../CurrencyPicker/CurrencyPIcker'
import Cart from '../Cart/Cart'

class Header extends Component {
  render () {
    return (
      <div className={classes.container}>
        <h1>Example webshop</h1>
        <div className={classes.right}>
          <CurrencyPicker/>
          <Cart/>
        </div>
      </div>
    )
  }
}

export default Header