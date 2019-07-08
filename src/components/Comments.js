import React, { Component } from 'react'
import Comment from './Comment'

const styles = {
  comments: {
    display: 'inline-block',
    height: '70vh',
    overflowY: 'auto',
    padding: '16px',
  },
  button: {
    userSelect: 'none',
    cursor: 'pointer',
    color: 'darkolivegreen',
  }
}

class Comments extends Component {

  constructor (props) {
    super(props)
    this.state = {
      comments: [],
      nextCommentId: 1,
      isLoading: false,
    }
  }

  componentDidMount () {
    this.getNextComment()
  }

  componentDidUpdate (prevProps, prevState) {
    const commentsHasChanged = this.state.comments !== prevState.comments
    if (commentsHasChanged) {
      this.trimOldComments()
    }
  }

  componentWillUnmount () {
    this.removeTimer()
  }

  getNextComment = () => {
    this.setState({isLoading: true})
    fetch(`https://jsonplaceholder.typicode.com/comments/${this.state.nextCommentId}`)
      .then((response) => {
        if (!response.ok) {
          throw(response)
        }
        return response.json()
      })
      .then((comment) => {
        return new Promise((resolve) => {
          this.timer = setTimeout(() => resolve(comment), 600)
        })
      })
      .then((comment) => {
        this.setState((state) => ({
          comments: [comment, ...state.comments],
          nextCommentId: state.nextCommentId + 1,
        }))
      })
      .catch((error) => {
        console.error(error)
        alert('something went wrong')
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        })
      })
  }

  trimOldComments = () => {
    if (this.state.comments.length > 5) {
      this.setState((state) => ({
        comments: state.comments.slice(0, 5)
      }))
    }
  }

  removeTimer = () => {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }

  render () {
    const {
      comments,
      isLoading,
    } = this.state
    return (
      <div>
        <div style={styles.button}>
          {
            isLoading ? (
              <div>loading...</div>
            ) : (
              <div onClick={this.getNextComment}>load another comment</div>
            )
          }
        </div>
        <div style={styles.comments}>
          {
            comments.map((comment) => (
              <Comment
                key={comment.id}
                {...comment}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default Comments