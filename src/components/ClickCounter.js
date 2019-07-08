import React, { useState } from 'react'

function ClickCounter (props) {

  const [
    counter,
    setCounter,
  ] = useState(props.defaultValue)

  const decreaseCounter = () => {
    setCounter(counter - 1)
  }

  const resetCounter = () => {
    setCounter(props.defaultValue)
  }

  const increaseCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <p>counter value: {counter}</p>
      <button onClick={decreaseCounter}>-1</button>
      <button onClick={resetCounter}>reset</button>
      <button onClick={increaseCounter}>+1</button>
    </div>
  )
}

export default ClickCounter