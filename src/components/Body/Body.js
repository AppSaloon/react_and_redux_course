import React, { Component } from 'react'
import classes from './Body.module.scss'
import Product from '../Product/Product'

class Body extends Component {
  render () {
    return (
      <div className={classes.container}>
        {
          this.props.products.map((product) => (
            <Product {...product} />
          ))
        }
      </div>
    )
  }
}

export default Body