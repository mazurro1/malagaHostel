import React from "react"
import { Title } from "../common"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Menu from "../components/Menu"

const Cafeteria = props => {
  const {
    contentfulPageMenu: { title, paragraph, headerImage },
  } = props.data
  return (
    <Layout img={headerImage.fluid}>
      <Title>{title}</Title>
      <p className="text-center">{paragraph.paragraph}</p>
      <Menu />
    </Layout>
  )
}

export const query = graphql`
  query MenuPage {
    contentfulPageMenu {
      title
      paragraph {
        paragraph
      }
      headerImage {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
export default Cafeteria
