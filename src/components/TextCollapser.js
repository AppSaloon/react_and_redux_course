import React, { Component } from 'react'

const styles = {
  expanded: {
    width: '200px',
    textAlign: 'justify',
  },
  collapsed: {
    width: '200px',
    textAlign: 'justify',
    maxHeight: '300px',
    overflowY: 'hidden',
  },
  button: {
    color: 'blueviolet',
    cursor: 'pointer',
  }
}

class TextCollapser extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isCollapsed: props.startCollapsed,
    }
  }

  toggleCollapsed = () => {
    this.setState((state) => ({
      isCollapsed: !state.isCollapsed,
    }))
  }

  render () {

    const {children} = this.props
    const {isCollapsed} = this.state

    const textStyle = isCollapsed ? styles.collapsed : styles.expanded

    return (
      <div>
        <p style={textStyle}>
          {children}
        </p>
        <span style={styles.button} onClick={this.toggleCollapsed}>
          {
            isCollapsed ? (
              'show more'
            ) : (
              'show less'
            )
          }
        </span>
      </div>
    )
  }
}

export default TextCollapser