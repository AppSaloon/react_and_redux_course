import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import About from '../About/About'
import Shop from '../Shop/Shop'
import Home from '../Home/Home'

class Content extends Component {
  render () {
    return (
      <React.Fragment>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About}/>
          <Route path='/shop' exact component={Shop}/>
          <Redirect to='/'/>
        </Switch>
      </React.Fragment>
    )
  }
}

export default Content