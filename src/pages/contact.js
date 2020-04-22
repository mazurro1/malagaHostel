import React from "react"
import { Title } from "../common"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"

const Contact = props => {
  return (
    <Layout>
      <Title>Contact</Title>
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
export default Contact
