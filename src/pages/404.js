import React from "react"
import { Title } from "../common"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { graphql } from "gatsby"
import { connect } from "react-redux"

const MarginCookie = styled.div`
  margin-top: 100px;
  height: calc(100vh - 169px);
`

const NotFoundPage = props => (
  <>
    <SEO title="404: Not found" />
    <MarginCookie>
      <div className="container">
        <Title>
          {props.data.contentfulPage404.titleEsenplru[props.indexLanguage]}
        </Title>
        <p className="text-center">
          {props.data.contentfulPage404.textEsenplru[props.indexLanguage]}
        </p>
      </div>
    </MarginCookie>
  </>
)

export const query = graphql`
  query PageBug {
    contentfulPage404 {
      titleEsenplru
      textEsenplru
    }
  }
`
const mapStateToProps = ({ language, indexLanguage }) => {
  return { language, indexLanguage }
}

export default connect(mapStateToProps, {})(NotFoundPage)
