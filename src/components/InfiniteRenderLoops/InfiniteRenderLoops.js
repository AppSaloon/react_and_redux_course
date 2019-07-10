import React, { Component } from 'react'

class InfiniteRenderLoops extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }

  increaseCounter = () => {
    this.setState((state) => ({
      counter: state.counter+1
    }))
  }

  render () {
    return (
      <div>
        <div>counter: {this.state.counter}</div>
        {/*<button onClick={this.increaseCounter}>increase counter</button>*/}
        <button onClick={this.increaseCounter()}>increase counter</button>
      </div>
    )
  }
}

export default InfiniteRenderLoops