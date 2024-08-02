import { ClothingCategory } from "../../utils"

export const addItem = (items, itemToAdd) => {
  const existingItem = items.find((item) => item.id === itemToAdd.id)
  if (existingItem) {
    return items.map((item) =>
      item.id === itemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    )
  } else {
    return [...items, { ...itemToAdd, quantity: 1 }]
  }
}
export const reduceItem = (items, itemToRemove) => {
  const existingItem = items.find((item) => item.id === itemToRemove.id)
  if (existingItem.quantity === 1) {
    return items.filter((item) => item.id !== itemToRemove.id)
  } else {
    return items.map((item) =>
      item.id === itemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    )
  }
}

export const clearItem = (items, itemToRemove) => {
  const existingItem = items.find((item) => item.id === itemToRemove.id)
  if (existingItem) {
    return items.filter((item) => item.id !== itemToRemove.id)
  } else {
    return
  }
}
