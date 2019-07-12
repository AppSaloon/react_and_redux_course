import React from 'react'
import Button from './components/Button/Button'

function App () {
  return (
    <div className="App">

      <Button
        value='test'
        onClick={() => console.log('you clicked the first button!')}
        disabled
      />

      <Button
        value='test'
        onClick={() => console.log('you clicked the second button!')}
      />

      <Button
        onClick={() => console.log('you clicked the third button!')}
      />
    </div>
  )
}

export default App
