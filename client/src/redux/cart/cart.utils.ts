export const addItem = (items: any, itemToAdd: any) => {
  const existingItem = items.find((item: any) => item.id === itemToAdd.id)
  if (existingItem) {
    return items.map((item: any) =>
      item.id === itemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    )
  } else {
    return [...items, { ...itemToAdd, quantity: 1 }]
  }
}
export const reduceItem = (items: any, itemToRemove: any) => {
  const existingItem = items.find((item: any) => item.id === itemToRemove.id)
  if (existingItem.quantity === 1) {
    return items.filter((item: any) => item.id !== itemToRemove.id)
  } else {
    return items.map((item: any) =>
      item.id === itemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    )
  }
}

export const clearItem = (items: any, itemToRemove: any) => {
  const existingItem = items.find((item: any) => item.id === itemToRemove.id)
  if (existingItem) {
    return items.filter((item: any) => item.id !== itemToRemove.id)
  } else {
    return
  }
}
