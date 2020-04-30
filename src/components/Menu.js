import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import MenuItemsCategory from "../components/MenuItemsCategory"
import MenuSelect from "../components/MenuSelect"
import { getCategoriesString, categoryItemsMenu } from "../common"

const newData = graphql`
  {
    allContentfulMenuItem {
      nodes {
        category
        name
        description {
          description
        }
        price
        image {
          fluid(maxWidth: 400) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`

const Menu = () => {
  const [filterMenu, setFilterMenu] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)
  const {
    allContentfulMenuItem: { nodes: allMenu },
  } = useStaticQuery(newData)

  useEffect(() => {
    setFilterMenu(allMenu)
  }, [allMenu])

  useEffect(() => {
    if (selectedOption) {
      if (selectedOption.value === "Wszystko") {
        setFilterMenu(allMenu)
      } else {
        const filterMenuItems = allMenu.filter(
          item => item.category === selectedOption.value
        )
        setFilterMenu(filterMenuItems)
      }
    }
  }, [selectedOption, allMenu])

  const setCategories = getCategoriesString(filterMenu, "category")
  const allItemsSorted = categoryItemsMenu(setCategories, filterMenu)
  return (
    <div className="container">
      <MenuSelect
        setSelectedOption={setSelectedOption}
        defaultOptionName="Wszystko"
        setCategories={setCategories}
      />
      <MenuItemsCategory allItemsSorted={allItemsSorted} />
    </div>
  )
}
export default Menu