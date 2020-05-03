import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import MenuItemsCategory from "../components/MenuItemsCategory"
import MenuSelect from "../components/MenuSelect"
import { getCategoriesString, categoryItemsMenu } from "../common"
import { connect } from "react-redux"

const newData = graphql`
  query Menu {
    allContentfulMenuItem {
      nodes {
        category
        name
        description {
          description
        }
        descriptionEn {
          descriptionEn
        }
        descriptionPl {
          descriptionPl
        }
        descriptionRu {
          descriptionRu
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
  const [filterMenu, setFilterMenu] = useState([])
  const [selectedOption, setSelectedOption] = useState({
    value: allProductsText,
    label: allProductsText,
  })
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
      ES: item.description,
      EN: item.descriptionEn,
      PL: item.descriptionPl,
      RU: item.descriptionRu,
    }
    return {
      category: item.category[indexLanguage],
      description: allDescriptionsLanguage[language],
      image: item.image,
      name: item.name[indexLanguage],
      price: item.price,
    }
  })

  useEffect(() => {
    setFilterMenu(allMenuFilterLanguage)
  }, [allMenu])

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
  return (
    <div className="container">
      <MenuSelect
        setSelectedOption={setSelectedOption}
        selectedOption={selectedOption}
        defaultOptionName={allProductsText}
        setCategories={setCategories}
        indexLanguage={indexLanguage}
      />
      <MenuItemsCategory allItemsSorted={allItemsSorted} language={language} />
    </div>
  )
}

const mapStateToProps = ({ language, indexLanguage }) => {
  return { language, indexLanguage }
}

export default connect(mapStateToProps, {})(Menu)
