import React from "react"
import { Title } from "../common"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Menu from "../components/Menu"

const Cafeteria = props => {
  return (
    <Layout img={props.data.file.childImageSharp.fluid}>
      <Title>Cafeteria</Title>
      <Menu />
    </Layout>
  )
}

export const query = graphql`
  {
    file(name: { eq: "Paginaoffline" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default Cafeteria
