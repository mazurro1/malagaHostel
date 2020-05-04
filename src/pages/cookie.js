import React from "react"
import { Title, PolicyText, CookieText } from "../common"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const MarginCookie = styled.div`
  margin-top: 100px;
`

const Cookie = () => (
  <Layout noImage>
    <SEO title="" />
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

export default Cookie
