import React, { Component } from 'react'

const products = {
  AZERTY: {
    name: 'Keyboard',
    price: 30,
  },
  MP1: {
    name: 'Mousepad',
    price: 8,
  },
  'HP-35': {
    name: 'Headphones',
    price: 75,
  },
  WC000: {
    name: 'Webcam',
    price: 40,
  },
}

class RenderingArrays extends Component {

  constructor (props) {
    super(props)
    this.state = {
      shoppingCart: [],
    }
  }

  addToShoppingCart = (event) => {
    const productId = event.target.name
    this.setState((state) => ({
      shoppingCart: [...state.shoppingCart, productId]
    }))
  }

  removeFromShoppingCart = (indexToRemove) => {
    this.setState((state) => ({
      shoppingCart: state.shoppingCart.filter((product, index) => index !== indexToRemove)
    }))
  }

  render () {
    return (
      <div>
        <table>
          <thead>
          <tr>
            <th colSpan={4}>Shop</th>
          </tr>
          <tr>
            <th>ProductID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
          {
            Object.keys(products).map((productId) => {
              const {
                name,
                price,
              } = products[productId]
              return (
                <tr key={productId}>
                  <td>{productId}</td>
                  <td>{name}</td>
                  <td>{price} EUR</td>
                  <td>
                    <button onClick={this.addToShoppingCart} name={productId}>Add to shopping cart</button>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
        <table>
          <thead>
          <tr>
            <th colSpan={4}>Shopping cart</th>
          </tr>
          <tr>
            <th>ProductID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
          </thead>
          <tbody>
          {
            this.state.shoppingCart.map((productId, index) => {
              const {
                name,
                price,
              } = products[productId]
              return (
                <tr key={productId}>
                  <td>{productId}</td>
                  <td>{name}</td>
                  <td>{price}</td>
                  <td>
                    <button onClick={() => this.removeFromShoppingCart(index)}>Remove from shopping cart</button>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default RenderingArrays