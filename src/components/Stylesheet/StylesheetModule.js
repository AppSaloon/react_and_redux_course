import React, { Component } from 'react'
import classes from './StylesheetModule.module.css'

class StylesheetModule extends Component {
  render () {
    return (
      <div className={classes.stylesheetModuleContainer}>
        <button>CSS Stylesheet</button>
      </div>
    )
  }
}

export default StylesheetModule