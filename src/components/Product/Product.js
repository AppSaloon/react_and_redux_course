import React, { Component } from 'react'
import classes from './Product.module.scss'

class Product extends Component {

  handleClick = () => {
    if(this.props.inShoppingCart) {
      this.props.removeFromCart(this.props.index)
    } else {
      this.props.addToCart(this.props.product)
    }
  }

  render () {
    const {
      product,
      currency,
      rates,
      inShoppingCart,
    } = this.props

    const {
      name,
      description,
      price,
      imgUrl,
    } = product

    const priceInCurrency = (price * rates[currency]).toFixed(2)

    return (
      <div className={classes.container}>
        <div className={classes.header}>
          <h3>{name}</h3>
        </div>
        <div className={classes.body}>
          <div className={classes.image}>
            <img src={imgUrl}/>
          </div>
          <div className={classes.description}>
            <div>{description}</div>
          </div>
        </div>
        <div className={classes.footer}>
          <div>price: {priceInCurrency} {currency}</div>
          <div className={classes.addButton} onClick={this.handleClick}>
            {
            Boolean(inShoppingCart) ? (
              'Remove from shopping cart'
            ) : (
              'Add to shopping cart'
            )
          }
          </div>
        </div>
      </div>
    )
  }
}

export default Product