import React, { Component } from 'react'

const styles = {
  comment: {
    marginTop: '16px',
    width: '250px',
    backgroundColor: 'beige',
    padding: '16px 8px',
    borderRadius: '8px',
    boxShadow: '0 8px 8px lightgrey',
  }
}

class Comment extends Component {
  render () {
    const {
      id,
      name,
      email,
      body,
    } = this.props
    return (
      <div id={`comment_${id}`} style={styles.comment}>
        <div>
          <h3>{name}</h3>
          <p>{body}</p>
        </div>
        by <a href={`mailto://${email}`}>{email}</a>
      </div>
    )
  }
}

export default Comment