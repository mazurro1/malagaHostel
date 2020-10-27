import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import MenuItemsCategory from "../components/MenuItemsCategory"
import MenuSelect from "../components/MenuSelect"
import { getCategoriesString, categoryItemsMenu } from "../common"
import { connect } from "react-redux"
import styled from "styled-components"
import { Colors } from "../common/consts"
import sal from "sal.js"

const ItemCategory = styled.div`
  padding: 10px;
`

const ItemCategoryContent = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.second};
  font-weight: bold;
  font-size: 1.4rem;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;

  &:hover {
    background-color: ${Colors.secondDark};
  }
`

const newData = graphql`
  query Menu {
    allContentfulMenuItem {
      nodes {
        category
        categoryPosition
        name
        productPosition
        desc {
          desc
        }
        descEN {
          descEN
        }
        descPL {
          descPL
        }
        descRU {
          descRU
        }
        price
        image {
          fluid(maxWidth: 400) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Menu = ({ allProductsText, indexLanguage, language }) => {
  const [selectedCategoryFirstTime, setSelectedCategoryFirstTime] = useState(
    false
  )
  const [filterMenu, setFilterMenu] = useState([])
  const [selectedOption, setSelectedOption] = useState({
    value: allProductsText,
    label: allProductsText,
  })

  useEffect(() => {
    sal({
      threshold: 0.1,
      once: true,
    })
  }, [selectedCategoryFirstTime, filterMenu, selectedOption])

  useEffect(() => {
    setSelectedOption({
      value: allProductsText,
      label: allProductsText,
    })
  }, [allProductsText])
  const {
    allContentfulMenuItem: { nodes: allMenu },
  } = useStaticQuery(newData)

  const allMenuFilterLanguage = allMenu.map((item, text) => {
    const allDescriptionsLanguage = {
      ES: item.desc ? item.desc.desc : null,
      EN: item.descEN ? item.descEN.descEN : null,
      PL: item.descPL ? item.descPL.descPL : null,
      RU: item.descRU ? item.descRU.descRU : null,
    }
    return {
      category: item.category[indexLanguage],
      categoryPosition: item.categoryPosition,
      description: allDescriptionsLanguage[language],
      image: item.image,
      name: item.name[indexLanguage],
      productPosition: item.productPosition,
      price: item.price,
    }
  })

  allMenuFilterLanguage.sort((a, b) => {
    const firstValue = a.categoryPosition
    const secondValue = b.categoryPosition
    if (firstValue < secondValue) {
      return -1
    } else if (firstValue > secondValue) {
      return 1
    } else {
      return 0
    }
  })

  useEffect(() => {
    setFilterMenu(allMenuFilterLanguage)
  }, [allMenu, language])

  useEffect(() => {
    if (selectedOption) {
      if (selectedOption.value === allProductsText) {
        setFilterMenu(allMenuFilterLanguage)
      } else {
        const filterMenuItems = allMenuFilterLanguage.filter(
          item => item.category === selectedOption.value
        )
        setFilterMenu(filterMenuItems)
      }
    }
  }, [selectedOption, allMenu])
  const setCategories = getCategoriesString(filterMenu, "category")
  const allItemsSorted = categoryItemsMenu(setCategories, filterMenu)

  const handleClickCategory = category => {
    setSelectedOption({
      value: category,
      label: category,
    })
    setSelectedCategoryFirstTime(true)
    window.scrollTo(0, 0)
  }

  const mapCategories = setCategories.map((item, index) => {
    return (
      <div
        className="col-lg-6 col-12 mb-4 menuScroll sal-animate"
        onClick={() => handleClickCategory(item)}
        key={index}
      >
        <ItemCategory>
          <ItemCategoryContent>{item}</ItemCategoryContent>
        </ItemCategory>
      </div>
    )
  })

  return (
    <div className="container">
      {!selectedCategoryFirstTime && <div className="row">{mapCategories}</div>}
      {selectedCategoryFirstTime && (
        <>
          <MenuSelect
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
            defaultOptionName={allProductsText}
            setCategories={setCategories}
            indexLanguage={indexLanguage}
          />

          <MenuItemsCategory
            allItemsSorted={allItemsSorted}
            language={language}
          />
        </>
      )}
    </div>
  )
}

const mapStateToProps = ({ language, indexLanguage }) => {
  return { language, indexLanguage }
}

export default connect(mapStateToProps, {})(Menu)
