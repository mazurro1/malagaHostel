import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import CustomImageGallery from "../components/CustomImageGallery"
import SelectDataCalendar from "../components/SelectDataCalendar"
import styled from "styled-components"
import { Title, Colors } from "../common"

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

const RoomTemplate = props => {
  const [activeData, setActiveData] = useState({})
  const { title, content, roomGallery } = props.data.contentfulRoom
  const { nodes: allDisabledDatas } = props.data.allContentfulDisabledDate

  useEffect(() => {
    if (props.location.state.selectedDate) {
      setActiveData(props.location.state.selectedDate)
    }
  }, [])

  return (
    <Layout noImage>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Title width="100%">{title}</Title>
          </div>
          <div className="col-12 col-lg-8">
            <CustomPStyle>
              <h3>Dodatkowe informacje:</h3>
              <p>{content.content}</p>
            </CustomPStyle>
          </div>
          <div className="col-12 col-lg-4">
            <WidthSelectDataCalendar
              disabledDatas={allDisabledDatas}
              setActualCalendarDate={setActiveData}
              activeData={activeData}
              activeMonth={activeData.start}
            />
          </div>
        </div>

        <CustomImageGallery images={roomGallery} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($path: String!) {
    contentfulRoom(path: { eq: $path }) {
      title
      path
      content {
        content
      }
      roomGallery {
        fixed(height: 600) {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
    }
    allContentfulDisabledDate(filter: { room: { path: { eq: $path } } }) {
      nodes {
        start
        end
      }
    }
  }
`

export default RoomTemplate
