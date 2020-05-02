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

export const categoryItems = (categories, items, rooms) => {
  let allItems = []
  categories.forEach(category => {
    const filterItemsToCategory = items.filter(
      item => item.room.path === category
    )
    const otherContentRoom = rooms.filter(room => room.path === category)
    const newAllItem = {
      category: category,
      items: filterItemsToCategory,
      otherContent: otherContentRoom[0],
    }
    allItems.push(newAllItem)
  })
  return allItems
}

export const categoryItemsMenu = (categories, items) => {
  let allItems = []
  categories.forEach(itemCategory => {
    const filterItemsToCategory = items.filter(
      item => item.category === itemCategory
    )
    const newAllItem = {
      category: itemCategory,
      items: filterItemsToCategory,
    }
    allItems.push(newAllItem)
  })
  return allItems
}

export const filterActiveAndNoActiveRooms = (activeData, sortedItems) => {
  const activeDataStart = new Date(activeData.start)
  const acticeDataEnd = new Date(activeData.end)
  const newSortedItems = sortedItems.map(item => {
    let newItem = {
      category: item.category,
      items: item.items,
      isBusy: true,
      otherContent: item.otherContent,
    }
    item.items.forEach(date => {
      const newDateStart = new Date(date.start)
      const newDateEnd = new Date(date.end)
      if (
        (activeDataStart <= newDateEnd && acticeDataEnd >= newDateEnd) ||
        (activeDataStart <= newDateStart && acticeDataEnd >= newDateStart)
      ) {
        newItem.isBusy = false
      }
    })
    return newItem
  })
  const filterRoomsBusy = newSortedItems.filter(item => item.isBusy === true)
  const filterRoomsNoBusy = newSortedItems.filter(item => item.isBusy === false)
  return { filterRoomsBusy, filterRoomsNoBusy }
}

export const isEmptyObject = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false
  }
  return true
}
