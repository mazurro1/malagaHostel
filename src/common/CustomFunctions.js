export const getCategories = (items, propName) => {
  let tempItems = items.map(item => {
    return item[propName][0]
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  return categories
}

export const getCategoriesString = (items, propName) => {
  let tempItems = items.map(item => {
    return item[propName]
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  return categories
}

export const getCategoriesStringPath = (items, propName) => {
  let tempItems = items.map(item => {
    return item.room[propName]
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  return categories
}

export const categoryItems = (categories, items) => {
  let allItems = []
  categories.forEach(category => {
    const filterItemsToCategory = items.filter(
      item => item.room.path === category
    )
    const newAllItem = {
      category: category,
      items: filterItemsToCategory,
    }
    allItems.push(newAllItem)
  })
  return allItems
}
