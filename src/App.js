import React from 'react'
import Ticker from './components/Ticker'
import Calc from './components/Calc/Calc'

function App () {
  return (
    <div className="App">
      <h2>Ticker</h2>
      <Ticker/>
      <h2>Calc</h2>
      <Calc/>
    </div>
  )
}

export default App
