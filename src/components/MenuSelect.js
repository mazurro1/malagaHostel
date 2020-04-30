import React from "react"
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
  setCategories,
}) => {
  const {
    categories: { nodes: allCategories },
  } = useStaticQuery(newData)
  let filterCategories = getCategoriesString(allCategories, "category")
  filterCategories = filterCategories.map(item => {
    return {
      value: item,
      label: item,
    }
  })
  const defaultCategories = {
    value: defaultOptionName,
    label: defaultOptionName,
  }
  filterCategories = [defaultCategories, ...filterCategories]
  const handleChange = selectedOption => {
    setSelectedOption(selectedOption)
  }

  return (
    <div className="row">
      <div className="col-12 col-lg-4 col-md-6">
        <Select
          defaultValue={filterCategories[0]}
          onChange={handleChange}
          options={filterCategories}
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
