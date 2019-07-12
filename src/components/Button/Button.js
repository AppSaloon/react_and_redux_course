import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './Button.module.scss'

class Button extends Component {

  render () {
    const {
      value,
      disabled,
      onClick,
    } = this.props

    const classNames = [classes.root]
    if(disabled) {
      classNames.push(classes.disabled)
    }

    return (
      <div className={classNames.join(' ')} onClick={onClick}>
        {value}
      </div>
    )
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

export default Button