import React from 'react'

class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      comment: '',
    }
  }

  handleChange = (event) => {
    const {
      name,
      value,
    } = event.target
    this.setState((state) => ({
      [name]: value,
    }))
  }

  render () {
    const {
      name,
      comment,
    } = this.state

    const formIsComplete = Boolean(name.length && comment.length)

    return (
      <div className="App">
        <div>
          <input
            type="text"
            name='name'
            value={name}
            onChange={this.handleChange}
            placeholder='your name'
          />
        </div>

        <div>
          <textarea
            name='comment'
            value={comment}
            onChange={this.handleChange}
            placeholder='your comment'
          />
        </div>

        <div>
          <button disabled={!formIsComplete}>submit your comment</button>
        </div>

      </div>
    )
  }
}

export default App
