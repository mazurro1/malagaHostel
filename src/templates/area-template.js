import React from "react"
import Layout from "../components/layout"
import { Title, Colors, AniLinkCustom } from "../common"
import { graphql } from "gatsby"
import { FaArrowLeft } from "react-icons/fa"
import styled from "styled-components"
import CustomImageGallery from "../components/CustomImageGallery"
import { connect } from "react-redux"
import SEO from "../components/seo"

const IconStyle = styled.button`
  border: none;
  padding: 0 10px;
  background-color: white;
  font-size: 2rem;
  color: ${Colors.second};
  transition-property: color;
  transition-duration: 0.3s;
  transition-timing-function: ease;

  &:hover {
    color: ${Colors.secondDark};
  }
`

const CustomPStyle = styled.div`
  margin-top: 30px;
  p {
    background-color: #e0e0e0;
    color: #404040;
    padding: 10px 20px;
    border-radius: 5px;
  }
  h3 {
    /* color: ${Colors.second}; */
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-weight: 600;
  }
`

const AreaTemplate = props => {
  const {
    titleArea,
    paragraphLong,
    paragraphLongEn,
    paragraphLongPl,
    paragraphLongRu,
    imageArea,
    additionalInformation,
    images,
    imageSeo,
  } = props.data.contentfulAreaItem

  const selectLanguage = {
    ES: {
      paragraph: paragraphLong.paragraphLong,
    },
    PL: {
      paragraph: paragraphLongPl.paragraphLongPl,
    },
    EN: {
      paragraph: paragraphLongEn.paragraphLongEn,
    },
    RU: {
      paragraph: paragraphLongRu.paragraphLongRu,
    },
  }
  return (
    <Layout img={imageArea.fluid}>
      <SEO
        title={selectLanguage.ES.paragraph}
        description={paragraphLong.paragraphLong}
        image={imageSeo ? imageSeo.file.url : null}
      />
      <div className="container">
        <AniLinkCustom to="/areas">
          <IconStyle>
            <FaArrowLeft />
          </IconStyle>
        </AniLinkCustom>

        <div className="row mb-5">
          <div className="col-12">
            <Title width="100%">{titleArea[props.indexLanguage]}</Title>
          </div>
          <div className="col-12 col-lg-12">
            <div className="row">
              <div className="col-12">
                <CustomPStyle>
                  <h3>{additionalInformation[props.indexLanguage]}</h3>
                  <p>{selectLanguage[props.language].paragraph}</p>
                </CustomPStyle>
              </div>
              <div className="col-12">
                <CustomImageGallery images={images} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query AreaTemplate($slug: String!) {
    contentfulAreaItem(path: { eq: $slug }) {
      titleArea
      images {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      imageSeo: imageArea {
        file {
          url
        }
      }
      additionalInformation
      path
      paragraphLongEn {
        paragraphLongEn
      }
      paragraphLongPl {
        paragraphLongPl
      }
      paragraphLongRu {
        paragraphLongRu
      }
      paragraphLong {
        paragraphLong
      }
      imageArea {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const mapStateToProps = ({ language, indexLanguage }) => {
  return { language, indexLanguage }
}

export default connect(mapStateToProps, {})(AreaTemplate)
