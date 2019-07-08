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

class Shop extends Component {
  render () {
    return (
      <div className={classes.container}>
        <Header/>
        <Body products={products}/>
      </div>
    )
  }
}

export default Shop