import React, { Component } from 'react'
import store from '../../redux/store'
import { decrease, increase, reset } from '../../redux/appState/actions'

class Controls extends Component {

  handleDecrease = () => {
    store.dispatch(decrease())
  }

  handleReset = () => {
    store.dispatch(reset())
  }

  handleIncrease = () => {
    store.dispatch(increase())
  }

  render () {
    return (
      <div>
        <button onClick={this.handleDecrease}>-1</button>
        <button onClick={this.handleReset}>reset</button>
        <button onClick={this.handleIncrease}>+1</button>
      </div>
    )
  }
}

export default Controls