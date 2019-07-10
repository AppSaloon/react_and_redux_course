const defaultState = {
  countryCodes: {
    BE: 'Belgium',
  }
}

export default (state = defaultState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {

    case 'REUSED_OBJECT_REFERENCE_ADD_COUNTRY_CODE': {
      // newState.countryCodes = {...state.countryCodes}
      newState.countryCodes[action.code] = action.name
      return newState
    }

    default: {
      return state
    }
  }
}