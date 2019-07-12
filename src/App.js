import React from 'react'

class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      file: null,
    }
    this.filePickerRef = React.createRef()
  }

  handleClick = () => {
    this.filePickerRef.current.click()
  }
  
  handleChange = () => {
    const files = Array.from(this.filePickerRef.current.files)
    console.log('files: ', files)
    if(files && files[0]) {
      this.setState({
        file: files[0]
      })
    }
  }

  render () {
    return (
      <div className="App">
        <input
          ref={this.filePickerRef}
          type="file"
          style={{display: 'none'}}
          onChange={this.handleChange}
        />

        <button onClick={this.handleClick}>Pick a file</button>
        {
          Boolean(this.state.file) && (
            <div>{this.state.file.name}</div>
          )
        }
      </div>
    )
  }
}

export default App
