export const addItem = (item) => ({
  type: 'ADD_ITEM',
  item,
})

export const removeItemIndex = (index) => ({
  type: 'REMOVE_ITEM_INDEX',
  index,
})