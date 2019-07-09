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

const defaultState = {
  showShoppingCart: false,
  currency: 'EUR',
  rates,
  products,
}

export default (state = defaultState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {

    case 'SET_SHOW_SHOPPING_CART': {
      newState.showShoppingCart = action.showShoppingCart
      return newState
    }

    case 'SET_CURRENCY': {
      newState.currency = action.currency
      return newState
    }

    default: {
      return state
    }
  }
}