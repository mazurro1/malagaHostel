import React, { useEffect } from "react"
import Layout from "../components/layout"
import ContactComponent from "../components/contactComponent"
import sal from "sal.js"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const Contact = props => {
  useEffect(() => {
    sal({
      threshold: 0.1,
      once: true,
    })
  }, [])
  return (
    <Layout>
      <SEO
        title={props.data.contentfulSeo.kontaktTitle}
        description={props.data.contentfulSeo.kontaktDescription}
      />
      <div
        data-sal="zoom-in"
        data-sal-duration="500"
        data-sal-easing="ease-out-bounce"
      >
        <ContactComponent />
      </div>
    </Layout>
  )
}
export const query = graphql`
  {
    contentfulSeo {
      kontaktTitle
      kontaktDescription
    }
  }
`

export default Contact
