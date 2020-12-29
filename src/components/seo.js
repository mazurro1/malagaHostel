import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDescription: description
        siteAuthor: author
        siteUrl
        siteImage: image
      }
    }
    imageFile: file(name: { eq: "Paginaoffline" }) {
      childImageSharp {
        fixed(width: 500, height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const SEO = ({ title = null, description = null, image = null }) => {
  const {
    site: {
      siteMetadata: { siteTitle, siteDescription, siteUrl, siteImage },
    },
    imageFile,
  } = useStaticQuery(getData)
  
  return (
    <Helmet htmlAttribute={{ lang: "pl" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDescription} />
      <meta
        name="image"
        content={`${
          image ? image : `${siteUrl}${imageFile.childImageSharp.fixed.src}`
        }`}
      />
      {/*facebook*/}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta
        property="og:description"
        content={description || siteDescription}
      />
      <meta
        property="og:image"
        content={`${
          image ? image : `${siteUrl}${imageFile.childImageSharp.fixed.src}`
        }`}
      />
      <meta property="og:image:widthl" content="400" />
      <meta property="og:image:heigth" content="300" />
    </Helmet>
  )
}
export default SEO
