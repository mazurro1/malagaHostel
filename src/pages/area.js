import React, { useEffect } from "react"
import { Title, Colors } from "../common"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import CustomBackgroundImageRoom from "../common/CustomBackgroundImageRoom"
import sal from "sal.js"

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-bottom: 20px;
  overflow: hidden;
  min-height: 300px;
  padding: 1px;

  h2 {
    margin-bottom: 10px;
    margin-top: 20px;
  }
`

const Line = styled.div`
  height: 2px;
  width: 50px;
  background-color: ${Colors.secondDark};
  margin-bottom: 20px;
  border-radius: 10px;
`

const Area = props => {
  const {
    allContentfulAreaItem: { nodes: allAreas },
    contentfulPageArea,
  } = props.data

  useEffect(() => {
    sal({
      threshold: 0.1,
      once: true,
    })
  }, [allAreas])

  const mapAreas = allAreas.map((item, index) => {
    return (
      <Card
        className="col-12"
        key={index}
        data-sal={index % 2 === 0 ? "slide-left" : "slide-right"}
        data-sal-duration="500"
        data-sal-easing="ease-out-bounce"
      >
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5 col-xl-4">
            <CustomBackgroundImageRoom img={item.imageArea.fluid} />
          </div>
          <div className="col-12 col-md-6 col-lg-7 col-xl-8 pl-4">
            <h2>{item.titleArea}</h2>
            <Line />
            <p>{item.paragraphArea.paragraphArea}</p>
          </div>
        </div>
      </Card>
    )
  })

  return (
    <Layout img={contentfulPageArea.imageHeader.fluid}>
      <div className="container">
        <div
          data-sal="zoom-in"
          data-sal-duration="500"
          data-sal-easing="ease-out-bounce"
        >
          <Title>{contentfulPageArea.title}</Title>
        </div>
        <p
          className="text-center"
          data-sal="slide-left"
          data-sal-duration="500"
          data-sal-easing="ease-out-bounce"
        >
          {contentfulPageArea.paragraph.paragraph}
        </p>
        <div className="row">{mapAreas}</div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulPageArea {
      title
      paragraph {
        paragraph
      }
      imageHeader {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }

    allContentfulAreaItem {
      nodes {
        titleArea
        paragraphArea {
          paragraphArea
        }
        imageArea {
          fluid(maxWidth: 515) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`
export default Area
