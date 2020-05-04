import React, { useEffect } from "react"
import { Title, Colors, useTextLanguages } from "../common"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FaArrowAltCircleRight } from "react-icons/fa"
import sal from "sal.js"
import styled from "styled-components"
import OurServices from "../components/OurServices"
import { connect } from "react-redux"
import SEO from "../components/seo"

const RegStyle = styled.div`
  .icon {
    font-size: 1.5rem;
    color: ${Colors.second};
    margin-right: 15px;
  }

  .content {
    font-size: 1rem;
  }
`

const RegBg = styled.div`
  background-color: #eee;
  padding: 50px 0;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2) inset;
  margin-bottom: 20px;
`

const Line = styled.div`
  height: 2px;
  width: 50px;
  background-color: ${Colors.secondDark};
  margin-bottom: 20px;
  border-radius: 10px;
`

const ImageSize = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const Services = props => {
  const {
    contentfulPageServices,
    contentfulPageServices: {
      headerImage,
      regulations1image,
      regulations2image,
    },
    allContentfulPageServicesOtherLanguages: { nodes: languages },
  } = props.data

  useEffect(() => {
    sal({
      threshold: 0.5,
      once: true,
    })
  }, [props.language])

  const allLanguages = useTextLanguages(contentfulPageServices, languages)

  const mapReg1 = allLanguages[props.language].regulations1.map(
    (item, index) => {
      return (
        <RegStyle
          key={index}
          data-sal="zoom-in"
          data-sal-duration="500"
          data-sal-easing="ease-out-bounce"
        >
          <span className="icon">
            <FaArrowAltCircleRight />
          </span>
          <span className="content">{item}</span>
        </RegStyle>
      )
    }
  )

  const mapReg2 = allLanguages[props.language].regulations2.map(
    (item, index) => {
      return (
        <RegStyle
          key={index}
          data-sal="zoom-out"
          data-sal-duration="500"
          data-sal-easing="ease-out-bounce"
        >
          <span className="icon">
            <FaArrowAltCircleRight />
          </span>
          <span className="content">{item}</span>
        </RegStyle>
      )
    }
  )

  return (
    <Layout img={headerImage.fluid}>
      <SEO
        title={props.data.contentfulSeo.servicesTitle}
        description={props.data.contentfulSeo.servicesDescription}
      />
      <div
        className="container"
        data-sal="slide-left"
        data-sal-duration="500"
        data-sal-easing="ease-out-bounce"
      >
        <Title width="100%">{allLanguages[props.language].title}</Title>
        <h3 className="mt-5">
          {allLanguages[props.language].regulations1Title}
        </h3>
        <Line />
        <p>
          {
            allLanguages[props.language].regulations1Paragraph
              .regulations1Paragraph
          }
        </p>
      </div>
      <RegBg>
        <div className="container">{mapReg1}</div>
      </RegBg>
      <div
        className="container"
        data-sal="slide-right"
        data-sal-duration="500"
        data-sal-easing="ease-out-bounce"
      >
        <ImageSize>
          <Img fluid={regulations1image.fluid} />
        </ImageSize>
        <h3 className="mt-5">
          {allLanguages[props.language].regulations2title}
        </h3>
        <Line />
      </div>
      <RegBg>
        <div className="container">{mapReg2}</div>
      </RegBg>
      <div
        className="container mb-4"
        data-sal="slide-left"
        data-sal-duration="500"
        data-sal-easing="ease-out-bounce"
      >
        <ImageSize>
          <Img fluid={regulations2image.fluid} />
        </ImageSize>
      </div>
      <OurServices />
    </Layout>
  )
}

export const query = graphql`
  query Services {
    contentfulSeo {
      servicesTitle
      servicesDescription
    }
    contentfulPageServices {
      headerImage {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyContentfulFluid
        }
      }
      title
      regulations1Title
      regulations1Paragraph {
        regulations1Paragraph
      }
      regulations1
      regulations1image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      regulations2title
      regulations2
      regulations2image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    allContentfulPageServicesOtherLanguages {
      nodes {
        language
        title
        regulations1Title: regulations1title
        regulations1Paragraph: regulations1paragraph {
          regulations1Paragraph: regulations1paragraph
        }
        regulations1
        regulations2title
        regulations2
      }
    }
  }
`
const mapStateToProps = ({ language, indexLanguage }) => {
  return { language, indexLanguage }
}

export default connect(mapStateToProps, {})(Services)
