import React, { Component } from 'react'
import classes from './Cart.module.scss'
import Product from '../Product/Product'
import { connect } from 'react-redux'
import { setShowShoppingCart } from '../../redux/appState/actions'
import * as shopConnector from '../../connectors/shop'

class Cart extends Component {

  toggleCart = () => {
    this.props.setShowShoppingCart(!this.props.showShoppingCart)
  }

  handleCheckout = () => {
    shopConnector.submitOrder()
  }
  
  render () {
    const {
      cart,
      showShoppingCart,
      checkingOut,
    } = this.props

    const items = cart.length

    return (
      <div className={classes.container}>
        <div className={classes.button} onClick={this.toggleCart}>{items} items in shopping cart</div>
        {
          Boolean(showShoppingCart) && (
            <div className={classes.cartOverlay}>
              <div className={classes.cart}>
                <div className={classes.header}>
                  <h2>Items in shopping cart:</h2>
                  {
                    Boolean(!checkingOut && cart.length) && (
                      <h2 className={classes.button} onClick={this.handleCheckout}>submit your order</h2>
                    )
                  }
                  <h2 onClick={this.toggleCart} className={classes.button}>X</h2>
                </div>
                <div className={classes.products}>
                  {
                    cart.map((product, index) => {
                      return (
                        <Product
                          key={index}
                          product={product}
                          index={index}
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

const mapStateToProps = ({appState, cartState}) => ({
  showShoppingCart: appState.showShoppingCart,
  cart: cartState.cart,
  checkingOut: cartState.checkingOut,
})

const mapDispatchToProps = dispatch => ({
  setShowShoppingCart: (showShoppingCart) => dispatch(setShowShoppingCart(showShoppingCart)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)