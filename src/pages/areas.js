import React, { useEffect } from "react"
import { Title, Colors, AniLinkCustom, useTextLanguages } from "../common"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import CustomBackgroundImageRoom from "../common/CustomBackgroundImageRoom"
import sal from "sal.js"
import { FaAlignLeft } from "react-icons/fa"
import { connect } from "react-redux"

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

  .readMoreIcon {
    padding-right: 10px;
    font-size: 0.9rem;
  }

  .more {
    position: relative;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: ${Colors.basicLight};
    color: ${Colors.basicText};
    font-size: 0.8rem;
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    &:hover {
      background-color: ${Colors.secondDark};
    }
  }
`

const ButtonPosition = styled.div`
  position: absolute;
  bottom: 10px;
  right: 30px;
`

const Line = styled.div`
  height: 2px;
  width: 50px;
  background-color: ${Colors.secondDark};
  margin-bottom: 20px;
  border-radius: 10px;
`

const Areas = props => {
  const {
    allContentfulAreaItem: { nodes: allAreas },
    contentfulPageArea,
  } = props.data

  const {
    allContentfulPageAreaOtherLanguage: { nodes: languages },
  } = props.data

  const allLanguages = useTextLanguages(contentfulPageArea, languages)

  useEffect(() => {
    sal({
      threshold: 0.1,
      once: true,
    })
  }, [])

  const mapAreas = allAreas.map((item, index) => {
    const selectLanguage = {
      ES: {
        title: item.titleArea,
        paragraph: item.paragraphArea.paragraphArea,
      },
      PL: {
        title: item.titleAreaPl,
        paragraph: item.paragraphAreaPl.paragraphAreaPl,
      },
      EN: {
        title: item.titleAreaEn,
        paragraph: item.paragraphAreaEn.paragraphAreaEn,
      },
      GER: {
        title: item.titleAreaGer,
        paragraph: item.paragraphAreaGer.paragraphAreaGer,
      },
    }
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
          <div className="col-12 col-md-6 col-lg-7 col-xl-8 pl-4 pb-5 ">
            <h2>{selectLanguage[props.language].title}</h2>
            <Line />
            <p>{selectLanguage[props.language].paragraph}</p>
            <ButtonPosition>
              <AniLinkCustom to={item.path}>
                <button className="more">
                  <span className="readMoreIcon">
                    <FaAlignLeft />
                  </span>
                  {allLanguages[props.language].readMoreButtonText}
                </button>
              </AniLinkCustom>
            </ButtonPosition>
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
          <Title>{allLanguages[props.language].title}</Title>
        </div>
        <p
          className="text-center"
          data-sal="slide-left"
          data-sal-duration="500"
          data-sal-easing="ease-out-bounce"
        >
          {allLanguages[props.language].paragraph.paragraph}
        </p>
        <div className="row">{mapAreas}</div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Area {
    contentfulPageArea {
      title
      paragraph {
        paragraph
      }
      readMoreButtonText
      imageHeader {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyContentfulFluid
        }
      }
    }

    allContentfulAreaItem {
      nodes {
        titleAreaEn
        titleAreaPl
        titleAreaGer

        paragraphAreaPl {
          paragraphAreaPl
        }
        paragraphAreaGer {
          paragraphAreaGer
        }
        paragraphAreaEn {
          paragraphAreaEn
        }
        titleArea
        path
        paragraphArea {
          paragraphArea
        }
        imageArea {
          fluid(maxWidth: 515) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    allContentfulPageAreaOtherLanguage {
      nodes {
        language
        title
        paragraph {
          paragraph
        }
        readMoreButtonText
      }
    }
  }
`
const mapStateToProps = ({ language, indexLanguage }) => {
  return { language, indexLanguage }
}

export default connect(mapStateToProps, {})(Areas)
