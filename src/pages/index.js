import React, { useState, useEffect } from "react"
import { Title, AniLinkCustom, Colors, useTextLanguages } from "../common"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, navigate } from "gatsby"
import CalendarWithComponents from "../components/CalendarWithComponents"
import GallerySlick from "../components/GallerySlick"
// import CustomImageGallery from "../components/CustomImageGallery"
import styled from "styled-components"
import CustomBackgroundParalaks from "../common/CustomBackgroundParalaks"
import ContactComponent from "../components/contactComponent"
import sal from "sal.js"
import CustomBackgroundImageRoom from "../common/CustomBackgroundImageRoom"
import OurServices from "../components/OurServices"
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
`

const Line = styled.div`
  height: 2px;
  width: 50px;
  background-color: ${Colors.secondDark};
  margin-bottom: 20px;
  border-radius: 10px;
`

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

const IndexPage = props => {
  const [activeData, setActiveData] = useState({})
  const [calendarActive, setCalendarActive] = useState(false)
  const [checkData, setCheckData] = useState(true)
  const {
    allContentfulPageHomeOtherLanguages: { nodes: languages },
    allContentfulPageHome: { nodes: pageHome },
    allContentfulCafeteriaItem: { nodes: cafeteriaItems },
  } = props.data
  const home = pageHome[0]
  useEffect(() => {
    sal({
      threshold: 0.1,
      once: true,
    })
  }, [props.language])

  const allLanguages = useTextLanguages(home, languages)

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

  const mapCafeteriaItems = cafeteriaItems.map((item, index) => {
    const selectLanguage = {
      ES: item.paragraph.paragraph,
      EN: item.paragraphEn.paragraphEn,
      PL: item.paragraphPl.paragraphPl,
      RU: item.paragraphRu.paragraphRu,
    }
    return (
      <Card
        className="col-12"
        data-sal={index % 2 ? "slide-left" : "slide-right"}
        data-sal-duration="500"
        data-sal-easing="ease-out-bounce"
        key={index}
      >
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5 col-xl-4">
            <CustomBackgroundImageRoom img={item.image.fluid} />
          </div>
          <div className="col-12 col-md-6 col-lg-7 col-xl-8 pl-4">
            <h3 className="mt-4">{item.title[props.indexLanguage]}</h3>
            <Line />
            <p>{selectLanguage[props.language]}</p>
          </div>
        </div>
      </Card>
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
      textCheckDates={allLanguages[props.language].checkDatesText}
    />
  )
  return (
    <Layout
      home
      img
      imagesSlider={home.slider}
      contentHeader={contentHeader}
      imagesText={allLanguages[props.language].imagesText}
    >
      <SEO
        title={props.data.contentfulSeo.homeTitle}
        description={props.data.contentfulSeo.homeDescription}
      />
      <div className="container">
        <div
          data-sal="zoom-in"
          data-sal-duration="500"
          data-sal-easing="ease-out-bounce"
        >
          <Title width="550">{allLanguages[props.language].aboutUsText}</Title>
        </div>
        <p
          data-sal="slide-left"
          data-sal-duration="500"
          data-sal-easing="ease-out-bounce"
        >
          {allLanguages[props.language].aboutUsParagraph.aboutUsParagraph}
        </p>
        <div
          className="text-center"
          data-sal="zoom-out"
          data-sal-duration="500"
          data-sal-easing="ease-out-bounce"
        >
          <AniLinkCustom to="/rooms">
            <GoToRoomsDiv>
              {allLanguages[props.language].ourRoomsButton}
            </GoToRoomsDiv>
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

        <div
          data-sal="zoom-in"
          data-sal-duration="500"
          data-sal-easing="ease-out-bounce"
        >
          <Title>{allLanguages[props.language].cafeteriaText}</Title>
        </div>
        <p
          className="text-center mb-5"
          data-sal="slide-left"
          data-sal-duration="500"
          data-sal-easing="ease-out-bounce"
        >
          {allLanguages[props.language].cafeteriaParagraph.cafeteriaParagraph}
        </p>
        <div className="row">{mapCafeteriaItems}</div>
      </div>
      <CustomBackgroundParalaks img={home.imageParalaks.fluid} />
      <div className="container mt-4">
        <div
          data-sal="zoom-in"
          data-sal-duration="500"
          data-sal-easing="ease-out-bounce"
        >
          <Title>{allLanguages[props.language].galleryText}</Title>
        </div>

        <div
          data-sal="slide-right"
          data-sal-duration="500"
          data-sal-easing="ease-out-bounce"
        >
          <GallerySlick images={home.mainGallery} imagesOnSide="2" />
          {/* <CustomImageGallery images={home.mainGallery} /> */}
        </div>
      </div>
      <OurServices />
      <div className="container">
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
  query Home {
    contentfulSeo {
      homeTitle
      homeDescription
    }
    allContentfulCafeteriaItem {
      nodes {
        title
        paragraph {
          paragraph
        }
        paragraphEn {
          paragraphEn
        }
        paragraphPl {
          paragraphPl
        }
        paragraphRu {
          paragraphRu
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }

    allContentfulPageHome {
      nodes {
        slider {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
        imagesText
        checkDatesText
        aboutUsText
        aboutUsParagraph {
          aboutUsParagraph
        }
        ourRoomsButton
        galleryTheBeastImages {
          fluid(maxWidth: 515, quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
        imageParalaks {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
        cafeteriaText
        cafeteriaParagraph {
          cafeteriaParagraph
        }
        galleryText

        mainGallery {
          fluid(maxHeight: 600, quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }

    allContentfulPageHomeOtherLanguages {
      nodes {
        language
        imagesText
        checkDatesText
        aboutUsText
        aboutUsParagraph {
          aboutUsParagraph
        }
        ourRoomsButton
        servicesText
        servicesParagraph {
          servicesParagraph
        }
        services
        cafeteriaText
        cafeteriaParagraph {
          cafeteriaParagraph
        }
        galleryText
        galleryParagraph {
          galleryParagraph
        }
      }
    }
  }
`

const mapStateToProps = ({ language, indexLanguage }) => {
  return { language, indexLanguage }
}

export default connect(mapStateToProps, {})(IndexPage)
