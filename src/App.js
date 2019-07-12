import React from 'react'
import InlineStyle from './components/InlineStyle/InlineStyle'
import StylesheetModule from './components/Stylesheet/StylesheetModule'
import SASS from './components/SASS/SASS'
import SASSModule from './components/SASSModule/SASSModule'
import WithStyles from './components/WithStyles/WithStyles'

function App () {
  return (
    <div className="App">

      <InlineStyle/>
      <StylesheetModule/>
      <SASS/>
      <StylesheetModule/>
      <SASSModule/>
      <WithStyles/>


    </div>
  )
}

export default App
