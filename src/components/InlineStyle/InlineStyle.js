import React, { Component } from 'react'

class InlineStyle extends Component {
  render () {
    const style = {
      border: '1px solid red',
      color: 'red',
    }
    return (
      <div>
        <button
          style={style}
        >Inline style</button>
      </div>
    )
  }
}

export default InlineStyle