import React, { Component } from 'react'

class MutatingState extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 'on',
    }
  }

  handleClick = () => {
    if(this.state.value === 'on') {
      // this.setState((state) => ({value: 'off'}))
      this.state.value = 'off'
    } else {
      // this.setState((state) => ({value: 'on'}))
      this.state.value = 'on'
    }
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick}>
          value: {
          this.state.value
        }
        </button>
      </div>
    )
  }
}

export default MutatingState