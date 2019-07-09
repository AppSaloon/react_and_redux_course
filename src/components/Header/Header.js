import React, { Component } from 'react'
import classes from './Header.module.scss'
import CurrencyPicker from '../CurrencyPicker/CurrencyPIcker'
import Cart from '../Cart/Cart'
import Body from '../Body/Body'

class Header extends Component {
  render () {
    return (
      <div className={classes.container}>
        <h1>Example webshop</h1>
        <div className={classes.right}>
          <CurrencyPicker
            currency={this.props.currency}
            setCurrency={this.props.setCurrency}
          />
          <Cart
            shoppingCart={this.props.shoppingCart}
            removeFromCart={this.props.removeFromCart}
            rates={this.props.rates}
            currency={this.props.currency}
          />
        </div>
      </div>
    )
  }
}

export default Header