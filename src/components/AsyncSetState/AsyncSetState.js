import React, { Component } from 'react'

class AsyncSetState extends Component {

  constructor (props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }

  increaseCounterBy3 = () => {
    this.setState({counter: this.state.counter + 1})
    this.setState({counter: this.state.counter + 1})
    this.setState({counter: this.state.counter + 1})
    // this.setState((state) => ({counter: state.counter + 1}))
    // this.setState((state) => ({counter: state.counter + 1}))
    // this.setState((state) => ({counter: state.counter + 1}))
  }

  render () {
    console.log('AsyncSetState rendered')
    return (
      <div>
        <div>counter: {this.state.counter}</div>
        <button onClick={this.increaseCounterBy3}>increase counter by 3</button>
      </div>
    )
  }
}

export default AsyncSetState