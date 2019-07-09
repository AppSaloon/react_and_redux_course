import React, { Component } from 'react'
import Display from './components/Display/Display'
import Controls from './components/Controls/Controls'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isDisplayVisible: false,
    }
  }

  toggleDisplayVisible = () => {
    this.setState((state) => ({
      isDisplayVisible: !state.isDisplayVisible,
    }))
  }

  render() {
    return (
      <div className="App">

        <div>
          <button onClick={this.toggleDisplayVisible}>toggle display on/off</button>
        </div>

        {
          Boolean(this.state.isDisplayVisible) && (
            <Display/>
          )
        }
        <Controls/>
      </div>
    )
  }
}

export default App
