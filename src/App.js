import React, { Component } from 'react'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Content from './components/Content/Content'
import classes from './App.module.scss'

class App extends Component {

  render () {
    return (
      <div className="App">
        <Header/>
        <div className={classes.container}>
          <SideBar/>
          <Content/>
        </div>
      </div>
    )
  }
}

export default App
