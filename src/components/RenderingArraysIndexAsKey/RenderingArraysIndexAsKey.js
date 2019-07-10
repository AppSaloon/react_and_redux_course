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

class ShoppingCartRow extends Component {

  componentDidUpdate(prevProps, prevState) {

    console.log('shoppingCartRow has updated: ', this.props.productId)
  }

  shouldComponentUpdate(nextProps, nextState) {
    const shouldUpdate = Object.keys(nextProps).some((key) => (
      nextProps[key] !== this.props[key]
    )) || Object.keys(this.props).some((key) => (
      nextProps[key] !== this.props[key]
    ))
    console.log('should rerender: ', shouldUpdate)
    return true
  }

  render() {
    console.log('shoppingCartRow has re-rendered: ', this.props.productId)
    const {
      uid,
      productId,
      name,
      price,
      removeFromShoppingCart,
    } = this.props
    return (
      <tr key={productId}>
        <td>{productId}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>
          <button onClick={() => removeFromShoppingCart(uid)}>Remove from shopping cart</button>
        </td>
      </tr>
    )
  }
}

class RenderingArraysIndexAsKey extends Component {

  constructor (props) {
    super(props)
    this.state = {
      shoppingCart: [],
    }
    this.uid = 0
  }

  addToShoppingCart = (event) => {
    const productId = event.target.name
    const cartItem = {
      uid: this.uid++,
      productId,
    }
    this.setState((state) => ({
      shoppingCart: [...state.shoppingCart, cartItem]
    }))
  }

  removeFromShoppingCart = (uidToRemove) => {
    this.setState((state) => ({
      shoppingCart: state.shoppingCart.filter(({uid}) => uid !== uidToRemove)
    }))
  }

  renderShoppingCartItem = ({uid, productId}) => {
    const {
      name,
      price,
    } = products[productId]
    return (
      <ShoppingCartRow
        key={uid}
        uid={uid}
        productId={productId}
        name={name}
        price={price}
        removeFromShoppingCart={this.removeFromShoppingCart}
      />
    )
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
            this.state.shoppingCart.map(this.renderShoppingCartItem)
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default RenderingArraysIndexAsKey