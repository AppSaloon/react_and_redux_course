import React, { Component } from 'react'
import classes from './Example.module.scss'

class Example extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      visible: Boolean(props.startVisible),
    }
  }
  
  toggleVisibility = () => {
    this.setState((state) => ({
      visible: !state.visible,
    }))
  }
  
  render () {
    const {
      title,
      children
    } = this.props
    return (
      <div className={classes.root}>
        <h2 onClick={this.toggleVisibility}>{title}</h2>
        {
          Boolean(this.state.visible) && (
            children
          )
        }
      </div>
    )
  }
}

export default Example