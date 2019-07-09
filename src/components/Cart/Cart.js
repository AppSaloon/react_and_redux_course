import React, { Component } from 'react'
import classes from './Cart.module.scss'
import Product from '../Product/Product'

class Cart extends Component {

  constructor(props) {
    super(props)
    this.state = {
      displayCart: false,
    }
  }

  toggleCart = () => {
    this.setState((state) => ({
      displayCart: !state.displayCart,
    }))
  }

  render () {
    const {
      shoppingCart,
      currency,
      rates,
      removeFromCart,
    } = this.props

    const items = shoppingCart.length

    return (
      <div className={classes.container}>
        <div className={classes.button} onClick={this.toggleCart}>{items} items in shopping cart</div>
        {
          Boolean(this.state.displayCart) && (
            <div className={classes.cartOverlay}>
              <div className={classes.cart}>
                <div className={classes.header}>
                  <h2>Items in shopping cart:</h2>
                  <h2 onClick={this.toggleCart} className={classes.button}>X</h2>
                </div>
                <div className={classes.products}>
                  {
                    shoppingCart.map((product, index) => {
                      return (
                        <Product
                          key={index}
                          product={product}
                          currency={currency}
                          rates={rates}
                          index={index}
                          removeFromCart={removeFromCart}
                          inShoppingCart
                        />
                      )
                    })
                  }
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default Cart