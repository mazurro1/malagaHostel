import React from "react"
import { Title } from "../common"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import AllRooms from "../components/AllRooms"

const Rooms = props => {
  const {
    location: { state: { activeData = false } = { activeData: {} } },
  } = props
  const { contentfulPageRooms } = props.data
  let stateActiveData = activeData ? activeData : false
  return (
    <Layout img={contentfulPageRooms.imageRooms.fluid}>
      <div className="container">
        <Title>{contentfulPageRooms.title}</Title>
        <p className="text-center">{contentfulPageRooms.description}</p>
      </div>
      <AllRooms
        stateActiveData={stateActiveData}
        roomsInfo={contentfulPageRooms}
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
  }
`
export default Rooms
