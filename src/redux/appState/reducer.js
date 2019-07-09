const defaultState = {
}

export default (state = defaultState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {

    default: {
      return state
    }
  }
}