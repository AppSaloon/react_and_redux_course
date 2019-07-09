import React, { Component } from 'react'
import { setCurrency } from '../../redux/appState/actions'
import { connect } from 'react-redux'


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
          {
            Object.keys(this.props.rates).map((currency, index) => (
              <option value={currency} key={index}>{currency}</option>
            ))
          }
        </select>
      </div>
    )
  }
}

const mapStateToProps = ({appState}) => ({
  rates: appState.rates,
  currency: appState.currency,
})

const mapDispatchToProps = dispatch => ({
  setCurrency: (currency) => dispatch(setCurrency(currency)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyPicker)