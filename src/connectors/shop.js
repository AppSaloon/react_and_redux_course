import store from '../redux/store'
import { checkout, setCheckingOut } from '../redux/cartState/actions'

const dummyAPICall = function (order) {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(order),
      1500
    )
  })
}

export const submitOrder = () => {

  store.dispatch(setCheckingOut(true))
  const order = store.getState().cartState.cart

  dummyAPICall(order)
    .then((submittedOrder) => {
      console.log('submittedOrder: ', submittedOrder)
      store.dispatch(checkout())
    })
    .catch(console.error)
    .finally(() => {
      store.dispatch(setCheckingOut(false))
    })
}