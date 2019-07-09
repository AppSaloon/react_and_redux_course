import React, { Component } from 'react'
import classes from './Shop.module.scss'
import Header from '../Header/Header'
import Body from '../Body/Body'
import { LoremIpsum } from 'lorem-ipsum'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
})

const products = (new Array(100)).fill(null).map((nothing, index) => ({
  id: index,
  name: lorem.generateWords(2),
  description: lorem.generateParagraphs(2),
  price: (Math.random() * 600).toFixed(2),
  imgUrl: 'https://placeimg.com/150/150/tech'
}))

const rates = {
  EUR: 1,
  USD: 1.120725,
  GBP: 0.898003875,
}

class Shop extends Component {

  constructor (props) {
    super(props)
    this.state = {
      currency: 'EUR',
      shoppingCart: [],

    }
  }

  setCurrency = (currency) => {
    this.setState({currency})
  }

  addToCart = (item) => {
    this.setState((state) => {
      const shoppingCart = [...state.shoppingCart, item]
      return {
        shoppingCart,
      }
    })
  }

  removeFromCart = (indexToRemove) => {
    this.setState((state) => {
      const shoppingCart = state.shoppingCart.filter((item, index) => {
        return index !== indexToRemove
      })
      return {
        shoppingCart,
      }
    })
  }

  render () {
    return (
      <div className={classes.container}>
        <Header
          rates={rates}
          currency={this.state.currency}
          shoppingCart={this.state.shoppingCart}
          setCurrency={this.setCurrency}
          removeFromCart={this.removeFromCart}
        />
        <Body
          products={products}
          rates={rates}
          currency={this.state.currency}
          addToCart={this.addToCart}
        />
      </div>
    )
  }
}

export default Shop