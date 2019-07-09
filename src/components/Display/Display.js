import React, { Component } from 'react'
import store from '../../redux/store'

class Display extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: store.getState().appState.counter,
    }
    this.unsubscribe = store.subscribe(this.handleChange)
  }

  componentWillUnmount () {
    if(typeof this.unsubscribe === 'function') {
      this.unsubscribe()
    }
  }

  handleChange = () => {
    const counter = store.getState().appState.counter
    if(counter !== this.state.counter) {
      this.setState({counter})
    }
  }

  render () {
    return (
      <div>
        counter: {this.state.counter}
      </div>
    )
  }
}

export default Display