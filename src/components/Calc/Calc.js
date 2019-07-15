import React, { useEffect, useState } from 'react'

export default (props) => {

  const [values, setValues] = useState({a: 0, b: 0})
  const [total, setTotal] = useState(0)

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target

    const newValues = {...values}
    newValues[name] = value
    setValues(newValues)
  }

  useEffect(() => {
    setTotal(parseInt(values.a)+parseInt(values.b))
  }, [values.a, values.b])

  return (
    <div>
      <input type="number" value={values.a} onChange={handleChange} name='a'/> +
      <input type="number" value={values.b} onChange={handleChange} name='b'/> =
      <input type="text" value={total} disabled/>
    </div>
  )
}