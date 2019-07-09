import React, { Component } from 'react'
import classes from './Shop.module.scss'
import Header from '../Header/Header'
import Body from '../Body/Body'

class Shop extends Component {
  render () {
    return (
      <div className={classes.container}>
        <Header/>
        <Body/>
      </div>
    )
  }
}

export default Shop