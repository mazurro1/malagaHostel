import React, { useEffect, useState } from "react"
import { Title, useTextLanguages } from "../common"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Menu from "../components/Menu"
import { connect } from "react-redux"
import SEO from "../components/seo"

const Cafeteria = props => {
  const {
    allContentfulPageMenuOtherLanguages: { nodes: languages },
    contentfulPageMenu,
  } = props.data
  const [allProductsText, setAllProductsText] = useState(
    contentfulPageMenu.allProductsText
  )
  const allLanguages = useTextLanguages(contentfulPageMenu, languages)
  useEffect(() => {
    setAllProductsText(allLanguages[props.language].allProductsText)
    // console.log(allLanguages[props.language].allProductsText)
  }, [props.language])

  return (
    <Layout img={contentfulPageMenu.headerImage.fluid}>
      <SEO
        title={props.data.contentfulSeo.menuTitle}
        description={props.data.contentfulSeo.menuDescription}
      />
      <Title>{allLanguages[props.language].title}</Title>
      <p className="text-center">
        {allLanguages[props.language].paragraph.paragraph}
      </p>
      <Menu allProductsText={allProductsText} />
    </Layout>
  )
}

export const query = graphql`
  query MenuPage {
    contentfulSeo {
      menuTitle
      menuDescription
    }
    contentfulPageMenu {
      title
      paragraph {
        paragraph
      }
      allProductsText
      headerImage {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyContentfulFluid
        }
      }
    }
    allContentfulPageMenuOtherLanguages {
      nodes {
        language
        title
        paragraph {
          paragraph
        }
        allProductsText
      }
    }
  }
`
const mapStateToProps = ({ language, indexLanguage }) => {
  return { language, indexLanguage }
}

export default connect(mapStateToProps, {})(Cafeteria)
