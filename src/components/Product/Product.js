import React, { Component } from 'react'
import classes from './Product.module.scss'

class Product extends Component {
  render () {
    const {
      name,
      description,
      price,
      imgUrl,
    } = this.props
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
          <div>price: {price}</div>
          <div className={classes.addButton}>Add to shopping cart</div>
        </div>
      </div>
    )
  }
}

export default Product