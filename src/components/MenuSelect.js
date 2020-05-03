import React, { useState, useEffect } from "react"
import Select from "react-select"
import { useStaticQuery, graphql } from "gatsby"
import { getCategoriesString, Colors } from "../common"

const newData = graphql`
  query MenuSelect {
    categories: allContentfulMenuItem {
      nodes {
        category
      }
    }
  }
`

const MenuSelect = ({
  setSelectedOption,
  defaultOptionName,
  selectedOption,
  indexLanguage,
}) => {
  const {
    categories: { nodes: allCategories },
  } = useStaticQuery(newData)
  const [defaultCategories, setDefaultCategories] = useState({
    value: defaultOptionName,
    label: defaultOptionName,
  })

  const allCategoriesSelectLanguage = allCategories.map((item, index) => {
    return {
      category: item.category[indexLanguage],
    }
  })

  useEffect(() => {
    setDefaultCategories({
      value: defaultOptionName,
      label: defaultOptionName,
    })
  }, [defaultOptionName])

  let filterCategories = getCategoriesString(
    allCategoriesSelectLanguage,
    "category"
  )
  filterCategories = filterCategories.map(item => {
    return {
      value: item,
      label: item,
    }
  })

  const allFilterCategories = [defaultCategories, ...filterCategories]
  const handleChange = selectedOption => {
    setSelectedOption(selectedOption)
  }
  return (
    <div className="row">
      <div className="col-12 col-lg-4 col-md-6">
        <Select
          value={selectedOption}
          // defaultValue={allFilterCategories[0]}
          onChange={handleChange}
          options={allFilterCategories}
          isSearchable={false}
          theme={theme => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: "#bdbdbd",
              primary: Colors.basic,
            },
          })}
        />
      </div>
    </div>
  )
}
export default MenuSelect
