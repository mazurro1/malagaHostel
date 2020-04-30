import React, { useState, useEffect } from "react"
import { Title, AniLinkCustom, Colors } from "../common"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, navigate } from "gatsby"
import CalendarWithComponents from "../components/CalendarWithComponents"
import GallerySlick from "../components/GallerySlick"
import CustomImageGallery from "../components/CustomImageGallery"
import styled from "styled-components"
import { FaCheckSquare } from "react-icons/fa"
import CustomBackgroundParalaks from "../common/CustomBackgroundParalaks"
import ContactComponent from "../components/contactComponent"
import sal from "sal.js"

const GoToRoomsDiv = styled.button`
  padding: 10px 20px;
  background-color: ${Colors.second};
  color: white;
  border: none;
  border-radius: 5px;
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;

  &:hover {
    background-color: ${Colors.secondDark};
  }
`

const ServicesItems = styled.div`
  .icon {
    font-size: 1.5rem;
    color: #43a047;
    margin-right: 10px;
  }

  text {
  }
`

const ServicesColor = styled.div`
  background-color: #eee;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2) inset;
`

const IndexPage = props => {
  const [activeData, setActiveData] = useState({})
  const [calendarActive, setCalendarActive] = useState(false)
  const [checkData, setCheckData] = useState(true)
  const {
    allContentfulPageHome: { nodes: pageHome },
  } = props.data
  const home = pageHome[0]

  useEffect(() => {
    sal({
      threshold: 0.5,
      once: true,
    })
  }, [])

  const handleChangeCalendarActive = () => {
    setCheckData(prevState => !prevState)
  }

  const handleClickConfirm = () => {
    setCalendarActive(false)
    setCheckData(false)
    const stateActiveData =
      activeData.start && activeData.end ? activeData : false
    navigate("/rooms", {
      state: { activeData: stateActiveData },
    })
  }

  const handleResetDate = () => {
    setActiveData({})
  }

  const handleGoBack = () => {
    setCalendarActive(false)
    setActiveData({})
  }

  const mapServicesItems = home.servicesList.map((item, index) => {
    return (
      <div
        className="col-6"
        key={index}
        data-sal={index % 2 ? "slide-left" : "slide-right"}
        data-sal-duration="500"
        data-sal-easing="ease-out-bounce"
      >
        <span className="icon">
          <FaCheckSquare />
        </span>
        <span className="text">{item}</span>
      </div>
    )
  })

  const disabledButtonConfirm =
    activeData.start && activeData.end ? true : false

  const contentHeader = (
    <CalendarWithComponents
      handleGoBack={handleGoBack}
      handleResetDate={handleResetDate}
      handleClickConfirm={handleClickConfirm}
      handleChangeCalendarActive={handleChangeCalendarActive}
      checkData={checkData}
      calendarActive={calendarActive}
      activeData={activeData}
      setActualCalendarDate={setActiveData}
      setCalendarActive={setCalendarActive}
      setCheckData={setCheckData}
      disabledButtonConfirm={disabledButtonConfirm}
      dateValue=""
      activeDateButton={false}
      firstColor
      textCheckDates={home.checkDatesText}
    />
  )
  return (
    <Layout home img imagesSlider={home.slider} contentHeader={contentHeader}>
      <SEO title="Home" />
      <div className="container">
        <div
          data-sal="zoom-in"
          data-sal-duration="500"
          data-sal-easing="ease-out-bounce"
        >
          <Title>{home.aboutUsText}</Title>
        </div>
        <p
          data-sal="slide-left"
          data-sal-duration="500"
          data-sal-easing="ease-out-bounce"
        >
          {home.aboutUsParagraph.aboutUsParagraph}
        </p>
        <div
          className="text-center"
          data-sal="zoom-out"
          data-sal-duration="500"
          data-sal-easing="ease-out-bounce"
        >
          <AniLinkCustom to="/rooms">
            <GoToRoomsDiv>{home.ourRoomsButton}</GoToRoomsDiv>
          </AniLinkCustom>
        </div>
        <div
          className="mb-5"
          data-sal="slide-right"
          data-sal-duration="500"
          data-sal-easing="ease-out-bounce"
        >
          <GallerySlick images={home.galleryTheBeastImages} />
        </div>
      </div>
      <ServicesColor>
        <div className="container pt-4 pb-4 mb-4">
          <div
            data-sal="zoom-in"
            data-sal-duration="500"
            data-sal-easing="ease-out-bounce"
          >
            <Title>{home.servicesText}</Title>
          </div>
          <p
            className="text-center"
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-easing="ease-out-bounce"
          >
            {home.servicesParagraph.servicesParagraph}
          </p>
          <ServicesItems className="mb-5">
            <div className="row">{mapServicesItems}</div>
          </ServicesItems>
        </div>
      </ServicesColor>
      <div className="container">
        <div
          data-sal="zoom-in"
          data-sal-duration="500"
          data-sal-easing="ease-out-bounce"
        >
          <Title>{home.cafeteriaText}</Title>
        </div>
        <p
          className="text-center mb-5"
          data-sal="slide-left"
          data-sal-duration="500"
          data-sal-easing="ease-out-bounce"
        >
          {home.cafeteriaParagraph.cafeteriaParagraph}
        </p>
      </div>
      <CustomBackgroundParalaks img={home.imageParalaks.fluid} />
      <div className="container mt-4">
        <div
          data-sal="zoom-in"
          data-sal-duration="500"
          data-sal-easing="ease-out-bounce"
        >
          <Title>{home.galleryText}</Title>
        </div>
        <p
          className="text-center"
          data-sal="slide-left"
          data-sal-duration="500"
          data-sal-easing="ease-out-bounce"
        >
          {home.galleryParagraph.galleryParagraph}
        </p>
        <div
          data-sal="slide-right"
          data-sal-duration="500"
          data-sal-easing="ease-out-bounce"
        >
          <CustomImageGallery images={home.mainGallery} />
        </div>
        <div
          data-sal="zoom-in"
          data-sal-duration="500"
          data-sal-easing="ease-out-bounce"
        >
          <ContactComponent />
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulPageHome {
      nodes {
        slider {
          fluid(maxWidth: 1920) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        checkDatesText
        aboutUsText
        aboutUsParagraph {
          aboutUsParagraph
        }
        ourRoomsButton
        galleryTheBeastImages {
          fluid(maxWidth: 515) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        imageParalaks {
          fluid(maxWidth: 1920) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        servicesText
        servicesParagraph {
          servicesParagraph
        }
        servicesList
        cafeteriaText
        cafeteriaParagraph {
          cafeteriaParagraph
        }
        galleryText
        galleryParagraph {
          galleryParagraph
        }
        mainGallery {
          fixed(height: 600) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
`

export default IndexPage
