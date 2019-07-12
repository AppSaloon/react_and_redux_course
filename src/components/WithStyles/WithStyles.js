import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'

const styles = (theme) => ({
  root: {
    '&>button': {
      border: `1px solid ${theme.colors.error}`,
      color: theme.colors.error,
    }
  }
})

class WithStyles extends Component {
  render () {
    const {
      classes,
    } = this.props
    return (
      <div className={classes.root}>
        <button>WithStyles</button>
      </div>
    )
  }
}

export default withStyles(styles)(WithStyles)