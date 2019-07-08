import React from 'react'
import Name from './Name'

export default function Welcome (props)  {
  return <h1>Hello, <Name {...props} /></h1>
}