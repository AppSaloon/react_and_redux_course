import React, { Component } from 'react'
import classes from './SASSModule.module.scss'

class SASSModule extends Component {
  render () {
    return (
      <div className={classes.SASSModuleContainer}>
        <button>SASS Stylesheet</button>
      </div>
    )
  }
}

export default SASSModule