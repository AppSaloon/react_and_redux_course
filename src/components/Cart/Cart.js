import React, { Component } from 'react'
import classes from './Cart.module.scss'

class Cart extends Component {
  render () {
    return (
      <div className={classes.container}>
        0 items in shopping cart
      </div>
    )
  }
}

export default Cart