import React, { Component } from 'react'

class MutatingProps extends Component {

  handleClick = () => {
    if (this.props.value === 'on') {
      this.props.value = 'off'
    } else {
      this.props.value = 'on'
    }
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick}>
          value: {
          this.props.value
        }
        </button>
      </div>
    )
  }
}

export default MutatingProps