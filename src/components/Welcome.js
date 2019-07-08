import React, { Component } from 'react'
import Name from './Name'

class Welcome extends Component {
  render () {
    return (
      <h1>Hello, <Name {...this.props}/></h1>
    )
  }
}

export default Welcome