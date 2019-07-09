import React, { Component } from 'react'

class CurrencyPicker extends Component {

  handleChange = (event) => {
    const currency = event.target.value
    this.props.setCurrency(currency)
  }

  render () {
    return (
      <div>
        <span>Currency: </span>
        <select value={this.props.currency} onChange={this.handleChange}>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="USD">USD</option>
        </select>
      </div>
    )
  }
}

export default CurrencyPicker