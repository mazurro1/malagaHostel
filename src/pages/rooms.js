import React from "react"
import { Title, useTextLanguages } from "../common"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import AllRooms from "../components/AllRooms"
import { connect } from "react-redux"

const Rooms = props => {
  const {
    location: { state: { activeData = false } = { activeData: {} } },
  } = props
  const {
    contentfulPageRooms,
    allContentfulPageRoomsOtherLanguages: { nodes: languages },
  } = props.data
  let stateActiveData = activeData ? activeData : false

  const allLanguages = useTextLanguages(contentfulPageRooms, languages)

  return (
    <Layout img={contentfulPageRooms.imageRooms.fluid}>
      <div className="container">
        <Title>{allLanguages[props.language].title}</Title>
        <p className="text-center">
          {allLanguages[props.language].description}
        </p>
      </div>
      <AllRooms
        stateActiveData={stateActiveData}
        roomsInfo={contentfulPageRooms}
        languageText={allLanguages[props.language]}
        language={props.language}
        indexLanguage={props.indexLanguage}
      />
    </Layout>
  )
}

export const query = graphql`
  query Rooms {
    contentfulPageRooms {
      title
      description
      selectDateText
      allRoomsText
      noBusyRoomsText
      busyRoomsText
      tooltipSeasonText
      datesOfSeasons
      seasonsText
      tooltipNoSeasonText
      buttonReadMoreText
      noAvaibleRoomsText
      tooltipPriceInfo
      imageRooms {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
    }
    allContentfulPageRoomsOtherLanguages {
      nodes {
        language
        title
        description
        seasonsText
        selectDateText
        allRoomsText
        noBusyRoomsText
        busyRoomsText
        noAvaibleRoomsText
        tooltipSeasonText
        tooltipNoSeasonText
        tooltipPriceInfo: tooltipPriceInfoOnlyBusyAndNoBusy
        buttonReadMoreText
      }
    }
  }
`

const mapStateToProps = ({ language, indexLanguage }) => {
  return { language, indexLanguage }
}

export default connect(mapStateToProps, {})(Rooms)
