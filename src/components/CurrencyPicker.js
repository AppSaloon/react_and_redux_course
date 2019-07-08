import React from 'react'

const currencies = ['AUD', 'BGN', 'BRL', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'HKD', 'HRK', 'HUF', 'IDR', 'ILS', 'INR', 'ISK', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'USD', 'ZAR']

function CurrencyPicker (props) {

  const {
    selectedCurrency,
    setSelectedCurrency,
  } = props

  const handleChange = (event) => {
    setSelectedCurrency(event.target.value)
  }

  return (
    <select onChange={handleChange} value={selectedCurrency}>
      {
        currencies.map((currency) => {
          return (
            <option key={currency} value={currency}>{currency}</option>
          )
        })
      }
    </select>
  )
}

export default CurrencyPicker