import React from "react"
import { Title } from "../common"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import AllRooms from "../components/AllRooms"

const Rooms = props => {
  const {
    location: { state: { activeData = false } = { activeData: {} } },
  } = props
  let stateActiveData = activeData ? activeData : false
  return (
    <Layout img={props.data.file.childImageSharp.fluid}>
      <Title>Rooms</Title>
      <AllRooms stateActiveData={stateActiveData} />
    </Layout>
  )
}

export const query = graphql`
  {
    file(name: { eq: "Paginaoffline" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default Rooms
