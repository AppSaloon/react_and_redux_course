import React, { Component } from 'react'
import history from '../../history'

class SideBar extends Component {
  
  handleClick = (event) => {
    const path = event.target.dataset.path
    history.push(path)
  }
  
  render () {
    return (
      <div>
        <h2 data-path="/home" onClick={this.handleClick}>Home</h2>
        <h2 data-path="/about" onClick={this.handleClick}>About</h2>
        <h2 data-path="/shop" onClick={this.handleClick}>Shop</h2>
      </div>
    )
  }
}

export default SideBar