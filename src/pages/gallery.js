import React from "react"
import { Title } from "../common"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import CustomImageGallery from "../components/CustomImageGallery"

const Gallery = props => {
  return (
    <Layout img={props.data.file.childImageSharp.fluid}>
      <Title>Gallery</Title>
      <CustomImageGallery images={props.data.contentfulPageGallery.images} />
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulPageGallery {
      images {
        fixed(height: 600) {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
    }
    file(name: { eq: "Paginaoffline" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default Gallery
