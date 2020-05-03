import React, { useState } from "react"

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

export const useTextLanguages = (basicLanguageObjectES, otherLanguages) => {
  const languagePL = otherLanguages.filter(item => item.language === "PL")
  const languageEN = otherLanguages.filter(item => item.language === "EN")
  const languageRU = otherLanguages.filter(item => item.language === "RU")

  const objectLanguagesToChanges = {
    ES: basicLanguageObjectES ? basicLanguageObjectES : {},
    PL: languagePL.length > 0 ? languagePL[0] : {},
    EN: languageEN.length > 0 ? languageEN[0] : {},
    RU: languageRU.length > 0 ? languageRU[0] : {},
  }
  return objectLanguagesToChanges
}

export const checkDatesIfSeason = (datesSeasons, activeData) => {
  let isSeason = false
  let isSeasonAndNoSeason = false
  let whereIsSeasonAndWhereIsNoSeason = []
  let activeDataStart = new Date(activeData.start)
  let activeDataEnd = new Date(activeData.end)

  activeDataStart = activeDataStart
    ? `${activeDataStart.getFullYear()}-${
        activeDataStart.getMonth() + 1 < 10
          ? "0" + (activeDataStart.getMonth() + 1)
          : activeDataStart.getMonth() + 1
      }-${
        activeDataStart.getDate() < 10
          ? "0" + activeDataStart.getDate()
          : activeDataStart.getDate()
      }`
    : ""

  activeDataEnd = activeDataEnd
    ? `${activeDataEnd.getFullYear()}-${
        activeDataEnd.getMonth() + 1 < 10
          ? "0" + (activeDataEnd.getMonth() + 1)
          : activeDataEnd.getMonth() + 1
      }-${
        activeDataEnd.getDate() < 10
          ? "0" + activeDataEnd.getDate()
          : activeDataEnd.getDate()
      }`
    : ""

  activeDataStart = new Date(activeDataStart)
  activeDataEnd = new Date(activeDataEnd)

  datesSeasons.forEach(item => {
    const indexStart = item.indexOf("/")
    const valueStart = item.slice(0, indexStart)
    const valueEnd = item.slice(indexStart + 1, item.length)
    const dateStart = new Date(valueStart)
    const dateEnd = new Date(valueEnd)
    if (
      activeDataStart >= dateStart &&
      activeDataStart <= dateEnd &&
      activeDataEnd >= dateStart &&
      activeDataEnd <= dateEnd
    ) {
      isSeasonAndNoSeason = false
      isSeason = true
    } else if (
      (activeDataStart < dateStart &&
        activeDataEnd <= dateEnd &&
        activeDataEnd >= dateStart) ||
      (activeDataStart >= dateStart &&
        activeDataStart <= dateEnd &&
        activeDataEnd > dateEnd)
    ) {
      isSeason = false
      isSeasonAndNoSeason = true
    }
    const newValid = {
      isSeason: isSeason,
      isSeasonAndNoSeason: isSeasonAndNoSeason,
    }
    whereIsSeasonAndWhereIsNoSeason.push(newValid)
  })

  return {
    isSeason,
    isSeasonAndNoSeason,
    whereIsSeasonAndWhereIsNoSeason,
  }
}
