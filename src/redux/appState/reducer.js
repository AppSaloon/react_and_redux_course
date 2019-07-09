const defaultState = {
  counter: 0
}

export default (state = defaultState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {

    case 'INCREASE': {
      newState.counter = state.counter + 1
      return newState
    }

    case 'DECREASE': {
      newState.counter = state.counter - 1
      return newState
    }

    case 'RESET': {
      newState.counter = 0
      return newState
    }

    default: {
      return state
    }
  }
}