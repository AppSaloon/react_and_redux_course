import React, { useEffect, useState } from 'react'
import CurrencyPicker from './CurrencyPicker'

const getRates = (currency) => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.exchangeratesapi.io/latest?base=${currency}`)
      .then((response) => {
        if(!response.ok) {
          throw(response)
        }
        return response.json()
      })
      .then(resolve)
      .catch(reject)
  })
}

function Ticker () {

  const [rates, setRates] = useState({})
  const [selectedCurrency, setSelectedCurrency] = useState('EUR')

  useEffect(() => {
    getRates(selectedCurrency)
      .then(({rates}) => setRates(rates))
      .catch(console.error)
  }, [selectedCurrency])

  const renderRates = () => {
    return Object.keys(rates).sort().map((currency) => {
      const rate = rates[currency]
      return (
        <div key={currency}>
          <span>{rate}</span>
          <span style={{marginLeft: '16px'}}>{currency}</span>
        </div>
      )
    })
  }

  return (
    <div className="App">
      1 <CurrencyPicker
        setSelectedCurrency={setSelectedCurrency}
        selectedCurrency={selectedCurrency}
      /> =
      {renderRates()}
    </div>
  )
}

export default Ticker
