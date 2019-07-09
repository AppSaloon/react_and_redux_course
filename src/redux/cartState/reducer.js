const defaultState = {
  cart: [],
}

export default (state = defaultState, action) => {
  const newState = Object.assign({}, state)
  switch(action.type) {

    case "ADD_ITEM": {
      newState.cart = [...state.cart, action.item]
      return newState
    }

    case 'REMOVE_ITEM_INDEX': {
      newState.cart = state.cart.filter((item, index) => index !== action.index)
      return newState
    }

    default: {
      return state
    }
  }
}