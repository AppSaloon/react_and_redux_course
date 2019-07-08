import React, { Component } from 'react'

class CurrencyPIcker extends Component {
  render () {
    return (
      <div>
        <span>Currency: </span>
        <select>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="USD">USD</option>
        </select>
      </div>
    )
  }
}

export default CurrencyPIcker