import React from "react"
import { Title, PolicyText, CookieText } from "../common"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { graphql } from "gatsby"

const MarginCookie = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
`

const Cookie = props => (
  <Layout noImage>
    <SEO
      title={props.data.contentfulSeo.cookieTitle}
      description={props.data.contentfulSeo.cookieDescription}
    />
    <MarginCookie>
      <div className="container">
        <Title width="100%">Política de Cookies:</Title>
        <CookieText />
        <Title width="100%">AVISO LEGAL Y CONDICIONES DE USO</Title>
        <PolicyText />
      </div>
    </MarginCookie>
  </Layout>
)

export const query = graphql`
  {
    contentfulSeo {
      cookieTitle
      cookieDescription
    }
  }
`

export default Cookie
