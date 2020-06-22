import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import CustomImageGallery from "../components/CustomImageGallery"
import SelectDataCalendar from "../components/SelectDataCalendar"
import styled from "styled-components"
import { Title, Colors, isEmptyObject } from "../common"
import { graphql, Link } from "gatsby"
import { FaArrowLeft } from "react-icons/fa"
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

const WidthSelectDataCalendar = styled(SelectDataCalendar)`
  width: 200px !important;
  .date_picker {
    max-width: 200px !important;
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

const DivOnCallendar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.01);
  height: 82%;
  width: 100%;
`

const PositionRelative = styled.div`
  position: relative;
`

const RoomTemplate = props => {
  const [activeData, setActiveData] = useState({})
  const {
    title,
    content,
    contentEn,
    contentPl,
    contentRu,
    roomGallery,
    bigImage,
    additionalOptions,
    bigImageSEO,
  } = props.data.contentfulRoom
  const { nodes: allDisabledDatas } = props.data.allContentfulDisabledDate

  useEffect(() => {
    const isEmpty = isEmptyObject(props.location.state)
    if (!isEmpty) {
      setActiveData(props.location.state.selectedDate)
    }
  }, [props.location.state])

  const selectLanguageContent = {
    ES: content.content,
    EN: contentEn.content,
    PL: contentPl.content,
    RU: contentRu.content,
  }

  const isActiveDataEmpty = isEmptyObject(activeData)
  const activeMonth = !isActiveDataEmpty ? activeData.start : new Date()
  return (
    <Layout img={bigImage.fluid}>
      <div className="container">
        <SEO
          title={title[props.indexLanguage]}
          description={selectLanguageContent[props.language]}
          image={bigImageSEO.file.url}
        />
        <Link
          to="/rooms"
          state={{
            activeData: activeData,
          }}
        >
          <IconStyle>
            <FaArrowLeft />
          </IconStyle>
        </Link>

        <div className="row mb-5">
          <div className="col-12">
            <Title width="100%">{title[props.indexLanguage]}</Title>
          </div>
          <div className="col-12 col-lg-8">
            <div className="row">
              <div className="col-12">
                <CustomPStyle>
                  <h3>{additionalOptions[props.indexLanguage]}</h3>
                  <p>{selectLanguageContent[props.language]}</p>
                </CustomPStyle>
              </div>
              <div className="col-12">
                <CustomImageGallery images={roomGallery} />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <PositionRelative>
              <WidthSelectDataCalendar
                disabledDatas={allDisabledDatas}
                setActualCalendarDate={setActiveData}
                activeData={activeData}
                activeMonth={activeMonth}
                onlyWatch={false}
              />
              <DivOnCallendar />
            </PositionRelative>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query RoomTemplate($slug: String!) {
    contentfulRoom(path: { eq: $slug }) {
      title
      path
      additionalOptions
      content {
        content
      }
      contentEn {
        content: contentEn
      }
      contentPl {
        content: contentPl
      }
      contentRu {
        content: contentRu
      }
      bigImage {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      bigImageSEO: bigImage {
        file {
          url
        }
      }
      roomGallery {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    allContentfulDisabledDate(filter: { room: { path: { eq: $slug } } }) {
      nodes {
        start
        end
      }
    }
  }
`
const mapStateToProps = ({ language, indexLanguage }) => {
  return { language, indexLanguage }
}

export default connect(mapStateToProps, {})(RoomTemplate)
