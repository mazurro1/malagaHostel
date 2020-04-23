import React, { useEffect } from "react"
import { Title } from "../common"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import AllRooms from "../components/AllRooms"

const Rooms = props => {
  useEffect(() => {
    console.log(props.location.state.activeData)
  }, [])

  const stateActiveData = props.location.state.activeData
    ? props.location.state.activeData
    : false

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
