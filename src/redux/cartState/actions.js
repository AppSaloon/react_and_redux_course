export const addItem = (item) => ({
  type: 'ADD_ITEM',
  item,
})

export const removeItemIndex = (index) => ({
  type: 'REMOVE_ITEM_INDEX',
  index,
})

export const setCheckingOut = (checkingOut) => ({
  type: 'SET_CHECKING_OUT',
  checkingOut,
})

export const checkout = () => ({
  type: 'CHECKOUT',
})