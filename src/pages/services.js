import React, { useEffect } from "react"
import { Title, Colors } from "../common"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FaArrowAltCircleRight } from "react-icons/fa"
import sal from "sal.js"
import styled from "styled-components"

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

const Services = props => {
  const {
    contentfulPageServices: {
      headerImage,
      title,
      regulations1Title,
      regulations1Paragraph,
      regulations1,
      regulations1image,
      regulations2title,
      regulations2,
      regulations2image,
    },
  } = props.data
  useEffect(() => {
    sal({
      threshold: 0.5,
      once: true,
    })
  }, [])

  const mapReg1 = regulations1.map((item, index) => {
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
  })

  const mapReg2 = regulations2.map((item, index) => {
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
  })

  return (
    <Layout img={headerImage.fluid}>
      <div
        className="container"
        data-sal="slide-left"
        data-sal-duration="500"
        data-sal-easing="ease-out-bounce"
      >
        <Title width="100%">{title}</Title>
        <h3 className="mt-5">{regulations1Title}</h3>
        <Line />
        <p>{regulations1Paragraph.regulations1Paragraph}</p>
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
        <Img fluid={regulations1image.fluid} />
        <h3 className="mt-5">{regulations2title}</h3>
        <Line />
      </div>
      <RegBg>
        <div className="container">{mapReg2}</div>
      </RegBg>
      <div
        className="container"
        data-sal="slide-left"
        data-sal-duration="500"
        data-sal-easing="ease-out-bounce"
      >
        <Img fluid={regulations2image.fluid} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Services {
    contentfulPageServices {
      headerImage {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyContentfulFluid_tracedSVG
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
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      regulations2title
      regulations2
      regulations2image {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
export default Services
