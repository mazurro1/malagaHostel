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
  }
`

const SEO = ({ title, description }) => {
  const {
    site: {
      siteMetadata: { siteTitle, siteDescription, siteUrl, siteImage },
    },
  } = useStaticQuery(getData)
  return (
    <Helmet htmlAttribute={{ lang: "pl" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={siteImage} />
      {/*facebook*/}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta
        property="og:description"
        content={description || siteDescription}
      />
      <meta property="og:image" content={`${siteUrl}${siteImage}`} />
      <meta property="og:image:widthl" content="400" />
      <meta property="og:image:heigth" content="300" />
    </Helmet>
  )
}
export default SEO
